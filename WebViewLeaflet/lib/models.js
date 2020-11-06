export const OWN_POSTION_MARKER_ID = "OWN_POSTION_MARKER_ID";
export var WebViewLeafletEvents;
(function (WebViewLeafletEvents) {
    WebViewLeafletEvents["MAP_COMPONENT_MOUNTED"] = "MAP_COMPONENT_MOUNTED";
    WebViewLeafletEvents["MAP_READY"] = "MAP_READY";
    WebViewLeafletEvents["DOCUMENT_EVENT_LISTENER_ADDED"] = "DOCUMENT_EVENT_LISTENER_ADDED";
    WebViewLeafletEvents["WINDOW_EVENT_LISTENER_ADDED"] = "WINDOW_EVENT_LISTENER_ADDED";
    WebViewLeafletEvents["UNABLE_TO_ADD_EVENT_LISTENER"] = "UNABLE_TO_ADD_EVENT_LISTENER";
    WebViewLeafletEvents["DOCUMENT_EVENT_LISTENER_REMOVED"] = "DOCUMENT_EVENT_LISTENER_REMOVED";
    WebViewLeafletEvents["WINDOW_EVENT_LISTENER_REMOVED"] = "WINDOW_EVENT_LISTENER_REMOVED";
    WebViewLeafletEvents["ON_MOVE_END"] = "onMoveEnd";
    WebViewLeafletEvents["ON_MOVE_START"] = "onMoveStart";
    WebViewLeafletEvents["ON_MOVE"] = "onMove";
    WebViewLeafletEvents["ON_RESIZE"] = "onResize";
    WebViewLeafletEvents["ON_UNLOAD"] = "onUnload";
    WebViewLeafletEvents["ON_VIEW_RESET"] = "onViewReset";
    WebViewLeafletEvents["ON_ZOOM_END"] = "onZoomEnd";
    WebViewLeafletEvents["ON_ZOOM_LEVELS_CHANGE"] = "onZoomLevelsChange";
    WebViewLeafletEvents["ON_ZOOM_START"] = "onZoomStart";
    WebViewLeafletEvents["ON_ZOOM"] = "onZoom";
    WebViewLeafletEvents["ON_MAP_TOUCHED"] = "onMapClicked";
    WebViewLeafletEvents["ON_MAP_MARKER_CLICKED"] = "onMapMarkerClicked";
    //  ON_MAP_SHAPE_CLICKED = "onMapShapeClicked" cannot click on shapes yet
})(WebViewLeafletEvents || (WebViewLeafletEvents = {}));
export var AnimationType;
(function (AnimationType) {
    AnimationType["BOUNCE"] = "bounce";
    AnimationType["FADE"] = "fade";
    AnimationType["PULSE"] = "pulse";
    AnimationType["JUMP"] = "jump";
    AnimationType["SPIN"] = "spin";
    AnimationType["WAGGLE"] = "waggle";
})(AnimationType || (AnimationType = {}));
export var MapLayerType;
(function (MapLayerType) {
    MapLayerType["IMAGE_LAYER"] = "ImageOverlay";
    MapLayerType["TILE_LAYER"] = "TileLayer";
    MapLayerType["VECTOR_LAYER"] = "VectorLayer";
    MapLayerType["VIDEO_LAYER"] = "VideoOverlay";
    MapLayerType["WMS_TILE_LAYER"] = "WMSTileLayer";
})(MapLayerType || (MapLayerType = {}));
export var MapShapeType;
(function (MapShapeType) {
    MapShapeType["CIRCLE"] = "Circle";
    MapShapeType["CIRCLE_MARKER"] = "CircleMarker";
    MapShapeType["POLYLINE"] = "Polyline";
    MapShapeType["POLYGON"] = "Polygon";
    MapShapeType["RECTANGLE"] = "Rectangle";
})(MapShapeType || (MapShapeType = {}));
export const INFINITE_ANIMATION_ITERATIONS = "infinite";
export var AnimationDirection;
(function (AnimationDirection) {
    AnimationDirection["NORMAL"] = "nomal";
    AnimationDirection["REVERSE"] = "reverse";
    AnimationDirection["ALTERNATE"] = "alternate";
    AnimationDirection["ALTERNATE_REVERSE"] = "alternate-reverse";
})(AnimationDirection || (AnimationDirection = {}));
