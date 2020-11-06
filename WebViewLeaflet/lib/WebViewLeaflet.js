var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as React from "react";
import AssetUtils from "expo-asset-utils";
import WebViewLeafletView from "./WebViewLeaflet.view";
import { WebViewLeafletEvents, OWN_POSTION_MARKER_ID, } from "./models";
import { ActivityOverlay } from "./ActivityOverlay";
import * as FileSystem from "expo-file-system";
import isEqual from "lodash.isequal";
// tslint:disable-next-line: no-var-requires
const INDEX_FILE_PATH = require(`./assets/index.html`);
class WebViewLeaflet extends React.Component {
    constructor(props) {
        super(props);
        this.componentDidMount = () => {
            this.loadHTMLFile();
        };
        this.loadHTMLFile = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const asset = yield AssetUtils.resolveAsync(INDEX_FILE_PATH);
                const fileString = yield FileSystem.readAsStringAsync(asset.localUri || " ");
                this.setState({ webviewContent: fileString });
            }
            catch (error) {
                // tslint:disable-next-line: no-console
                console.warn(error, "Unable to resolve index file");
            }
        });
        this.componentDidUpdate = (prevProps, prevState) => {
            const { webviewContent } = this.state;
            const { mapCenterPosition, mapMarkers, mapLayers, mapShapes, ownPositionMarker, zoom, } = this.props;
            if (!prevState.webviewContent && webviewContent) {
                this.updateDebugMessages("file loaded");
            }
            if (!isEqual(mapCenterPosition, prevProps.mapCenterPosition)) {
                this.sendMessage({ mapCenterPosition });
            }
            if (!isEqual(mapMarkers, prevProps.mapMarkers)) {
                this.sendMessage({ mapMarkers });
            }
            if (!isEqual(mapLayers, prevProps.mapLayers)) {
                this.sendMessage({ mapLayers });
            }
            if (!isEqual(mapShapes, prevProps.mapShapes)) {
                this.sendMessage({ mapShapes });
            }
            if (!isEqual(ownPositionMarker, prevProps.ownPositionMarker)) {
                this.sendMessage({ ownPositionMarker });
            }
            if (zoom !== prevProps.zoom) {
                this.sendMessage({ zoom });
            }
        };
        this.setMapCenterPosition = () => {
            const { mapCurrentCenterPosition } = this.state;
            const { mapCenterPosition } = this.props;
            if (!isEqual(mapCenterPosition, mapCurrentCenterPosition) &&
                mapCenterPosition) {
                this.setState({
                    mapCurrentCenterPosition: mapCenterPosition,
                });
                this.sendMessage({
                    mapCenterPosition,
                });
            }
        };
        // Handle messages received from webview contents
        this.handleMessage = (data) => {
            var _a;
            const { onMessageReceived } = this.props;
            const message = JSON.parse(data);
            this.updateDebugMessages(`received: ${JSON.stringify(message)}`);
            if (message.msg === WebViewLeafletEvents.MAP_READY) {
                this.sendStartupMessage();
            }
            if (message.event === WebViewLeafletEvents.ON_MOVE_END) {
                this.setState({
                    mapCurrentCenterPosition: ((_a = message === null || message === void 0 ? void 0 : message.payload) === null || _a === void 0 ? void 0 : _a.mapCenterPosition) || [0, 0],
                });
            }
            onMessageReceived(message);
        };
        // Send message to webview
        this.sendMessage = (payload) => {
            var _a;
            this.updateDebugMessages(`sending: ${payload}`);
            (_a = this.webViewRef) === null || _a === void 0 ? void 0 : _a.injectJavaScript(`window.postMessage(${JSON.stringify(payload)}, '*');`);
        };
        // Send a startup message with initalizing values to the map
        this.sendStartupMessage = () => {
            const startupMessage = {};
            const { mapLayers, mapMarkers, mapShapes, mapCenterPosition = [], ownPositionMarker, zoom = 7, } = this.props;
            if (mapLayers) {
                startupMessage.mapLayers = mapLayers;
            }
            if (mapMarkers) {
                startupMessage.mapMarkers = mapMarkers;
            }
            if (mapCenterPosition) {
                startupMessage.mapCenterPosition = mapCenterPosition;
            }
            if (mapShapes) {
                startupMessage.mapShapes = mapShapes;
            }
            if (ownPositionMarker) {
                startupMessage.ownPositionMarker = Object.assign(Object.assign({}, ownPositionMarker), { id: OWN_POSTION_MARKER_ID });
            }
            startupMessage.zoom = zoom;
            this.setState({ isLoading: false });
            this.updateDebugMessages("sending startup message");
            this.webViewRef.injectJavaScript(`window.postMessage(${JSON.stringify(startupMessage)}, '*');`);
        };
        // Add a new debug message to the debug message array
        this.updateDebugMessages = (debugMessage) => {
            this.setState({
                debugMessages: [...this.state.debugMessages, debugMessage],
            });
        };
        this.onError = (syntheticEvent = {}) => {
            const { onError = () => { } } = this.props;
            onError(syntheticEvent);
        };
        this.onLoadEnd = () => {
            this.setState({ isLoading: false });
            const { onLoadEnd = () => { } } = this.props;
            onLoadEnd();
        };
        this.onLoadStart = () => {
            this.setState({ isLoading: true });
            const { onLoadStart = () => { } } = this.props;
            onLoadStart();
        };
        this.state = {
            debugMessages: [],
            isLoading: null,
            mapCurrentCenterPosition: null,
            webviewContent: null,
        };
        this.webViewRef = null;
    }
    // Output rendered item to screen
    render() {
        const { debugMessages, webviewContent } = this.state;
        const { backgroundColor = "#FAEBD7", doShowDebugMessages = false, loadingIndicator = () => <ActivityOverlay />, } = this.props;
        if (webviewContent) {
            return (<WebViewLeafletView backgroundColor={backgroundColor} debugMessages={debugMessages} doShowDebugMessages={doShowDebugMessages} handleMessage={this.handleMessage} webviewContent={webviewContent} loadingIndicator={loadingIndicator} onError={this.onError} onLoadEnd={this.onLoadEnd} onLoadStart={this.onLoadStart} setWebViewRef={(ref) => {
                this.webViewRef = ref;
            }}/>);
        }
        else {
            return null;
        }
    }
}
WebViewLeaflet.defaultProps = {
    backgroundColor: "#FAEBD7",
    doDisplayCenteringButton: true,
    doShowDebugMessages: false,
    loadingIndicator: () => <ActivityOverlay />,
    // tslint:disable-next-line: no-empty
    onError: (syntheticEvent) => { },
    // tslint:disable-next-line: no-empty
    onLoadEnd: () => { },
    // tslint:disable-next-line: no-empty
    onLoadStart: () => { },
};
export default WebViewLeaflet;
