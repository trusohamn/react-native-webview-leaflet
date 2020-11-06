import React from "react";
import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";
import DebugMessageBox from "./DebugMessageBox";
const WebViewLeafletView = ({ backgroundColor, debugMessages, doShowDebugMessages, handleMessage, webviewContent, loadingIndicator, onError, onLoadEnd, onLoadStart, setWebViewRef, }) => {
    return (<View style={Object.assign(Object.assign({}, StyleSheet.absoluteFillObject), { flex: 1, backgroundColor })}>
      {webviewContent && (<WebView containerStyle={{
        flex: 0,
        height: "100%",
        width: "100%",
    }} 
    /*  style={{ flex: 0, height: '100%', width: '100%' }} */
    ref={(component) => {
        if (!!component)
            setWebViewRef(component);
    }} javaScriptEnabled={true} onLoadEnd={onLoadEnd} onLoadStart={onLoadStart} onMessage={(event) => {
        if (event && event.nativeEvent && event.nativeEvent.data) {
            handleMessage(event.nativeEvent.data);
        }
    }} domStorageEnabled={true} startInLoadingState={true} onError={onError} originWhitelist={["*"]} 
    /*  renderLoading={loadingIndicator || null} */
    source={{
        html: webviewContent,
    }} allowFileAccess={true} allowUniversalAccessFromFileURLs={true} allowFileAccessFromFileURLs={true}/>)}
      <DebugMessageBox debugMessages={debugMessages} doShowDebugMessages={doShowDebugMessages}/>
    </View>);
};
export default WebViewLeafletView;
