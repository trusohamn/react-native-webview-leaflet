import { ReactElement } from "react";
import { NativeSyntheticEvent } from "react-native";
import { WebView } from "react-native-webview";
import { WebViewError } from "react-native-webview/lib/WebViewTypes";
export interface Props {
    backgroundColor: string;
    debugMessages: string[];
    doShowDebugMessages: boolean;
    handleMessage: (data: string) => void;
    webviewContent: string;
    loadingIndicator: () => ReactElement;
    onError: (syntheticEvent: NativeSyntheticEvent<WebViewError>) => void;
    onLoadEnd: () => void;
    onLoadStart: () => void;
    setWebViewRef: (ref: WebView) => void;
}
declare const WebViewLeafletView: ({ backgroundColor, debugMessages, doShowDebugMessages, handleMessage, webviewContent, loadingIndicator, onError, onLoadEnd, onLoadStart, setWebViewRef, }: Props) => JSX.Element;
export default WebViewLeafletView;
