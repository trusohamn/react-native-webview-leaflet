import * as React from "react";
import { MapMarker, WebviewLeafletMessage, MapLayer, MapShape, OwnPositionMarker } from "./models";
import { LatLng } from "react-leaflet";
export interface WebViewLeafletProps {
    backgroundColor?: string;
    doShowDebugMessages?: boolean;
    loadingIndicator?: () => React.ReactElement;
    onError?: (syntheticEvent: any) => void;
    onLoadEnd?: () => void;
    onLoadStart?: () => void;
    onMessageReceived: (message: WebviewLeafletMessage) => void;
    mapLayers?: MapLayer[];
    mapMarkers?: MapMarker[];
    mapShapes?: MapShape[];
    mapCenterPosition?: LatLng;
    ownPositionMarker?: OwnPositionMarker;
    zoom?: number;
}
interface State {
    debugMessages: string[];
    mapCurrentCenterPosition: LatLng | null;
    webviewContent: string | null;
    isLoading: boolean | null;
}
declare class WebViewLeaflet extends React.Component<WebViewLeafletProps, State> {
    private webViewRef;
    static defaultProps: {
        backgroundColor: string;
        doDisplayCenteringButton: boolean;
        doShowDebugMessages: boolean;
        loadingIndicator: () => JSX.Element;
        onError: (syntheticEvent: any) => void;
        onLoadEnd: () => void;
        onLoadStart: () => void;
    };
    constructor(props: any);
    componentDidMount: () => void;
    private loadHTMLFile;
    componentDidUpdate: (prevProps: WebViewLeafletProps, prevState: State) => void;
    private setMapCenterPosition;
    private handleMessage;
    private sendMessage;
    private sendStartupMessage;
    private updateDebugMessages;
    private onError;
    private onLoadEnd;
    private onLoadStart;
    render(): JSX.Element | null;
}
export default WebViewLeaflet;
