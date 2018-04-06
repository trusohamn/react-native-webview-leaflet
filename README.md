# React Native Webview Leaflet
## A Leaflet map component with no native code for React Native apps.
### Why use this?
This component is useful if you want to display emojis on a map and animate them using CSS

### Why not use this?
This component may not be useful if you expect your users to tap on the map quickly since there is a bug in React Native that prevents the map from responding to multiple taps that occure less than ~1.5 seconds apart.  Also, this component does not support custom CSS animations.  However, I'll happily accept pull requests to add new animations.  See below for more detail.

[![npm](https://img.shields.io/npm/v/react-native-webview-leaflet.svg)](https://www.npmjs.com/package/react-native-webview-leaflet)
[![npm](https://img.shields.io/npm/dm/react-native-webview-leaflet.svg)](https://www.npmjs.com/package/react-native-webview-leaflet)
[![npm](https://img.shields.io/npm/dt/react-native-webview-leaflet.svg)](https://www.npmjs.com/package/react-native-webview-leaflet)
[![npm](https://img.shields.io/npm/l/react-native-webview-leaflet.svg)](https://github.com/react-native-component/react-native-webview-leaflet/blob/master/LICENSE)

![Image](https://thumbs.gfycat.com/CraftyKnobbyApe-size_restricted.gif)

## Try it in Expo
![QR Code](https://github.com/reggie3/react-native-webview-leaflet/blob/master/expo-qr-code.png)

[Link to Expo Project Page](https://expo.io/@reggie3/react-native-webview-leaflet)

## Installation
Install using npm or yarn like this: 
~~~
npm install --save react-native-webview-leaflet
~~~
or
~~~
yarn add react-native-webview-leaflet
~~~

## Usage
and import like so
~~~
import WebViewLeaflet from 'react-native-webview-leaflet';
~~~


Add the following component to your code.
~~~~
<WebViewLeaflet 
        mapCenterCoords={coords} 
        onMapClicked={this.onMapClicked}
        onMarkerClicked={this.onMarkerClicked}
        onWebViewReady={this.onWebViewReady}
        locations={this.state.locations},
        zoom={15} />
        getMapCallback={this.getMapCallback}
~~~~
|
This component accepts the following props:


| Name                   | Required      | Description |
| ---------------------- | ------------- | ----------- |
|mapCenterCoords| no | The center of the map in an array fo the form [latitude, longitude] |
|onMapClicked| no | a function that will be called when the map is tapped.  It will receive the location of the tap in an array of the form [latitude, longitude]
|onMarkerClicked| no | a function that will be called when a marker is tapped.  It will receive the ID of the marker as shown in the location.id object below. |
|onWebViewReady| no | a function that is called when the map is ready for display.  For example, it can be used to hide an activity indicator  |
|locations| no | see below |
|zoom| no | initial map zoom level. "Lower zoom levels means that the map shows entire continents, while higher zoom levels means that the map can show details of a city." (source: leaflet website)|
|getMapCallback| no | A function that will receive the Leaflet map as an arguement |
|onMove|no| A function that will be be called when the map is moved.  The function will receive an object contining the map's center latitude and longitude, and the northEast and southWest most coordinates (see format [below](####Format-for-the-Object-Received-by-onMove,-onMoveEnd,-onZoom,-and-onZoomEnd-Callback-Functions))|
|onMoveEnd|no|A function that will be be called when map movement ends.  The function will receive an object contining the map's center latitude and longitude, and the northEast and southWest most coordinates (see format [below](####Format-for-the-Object-Received-by-onMove,-onMoveEnd,-onZoom,-and-onZoomEnd-Callback-Functions))|
|onZoom|no|A function that will be be called when the map is zoomed.  The function will receive an object contining the map's center latitude and longitude, and the northEast and southWest most coordinates (see format [below](####Format-for-the-Object-Received-by-onMove,-onMoveEnd,-onZoom,-and-onZoomEnd-Callback-Functions))|
|onZoomEnd|no|A function that will be be called when map zooming ends.  The function will receive an object contining the map's center latitude and longitude, and the northEast and southWest most coordinates (see format [below](####Format-for-the-Object-Received-by-onMove,-onMoveEnd,-onZoom,-and-onZoomEnd-Callback-Functions))|



### Marker Locations
The locations property expects an array of objects with the following format:
~~~
{
        id: Math.floor(Math.random() * 1000),   // The ID attached to the marker. It will be returned when onMarkerClicked is called
        coords: [37.06452161, -75.67364786],    // Latitude and Longitude of the marker
        icon: emoji[Math.floor(Math.random() * emoji.length)],  // An emoji that will be displayed as the marker 

        // This object controls the animation that will be used
        // See below for a list of available animations
        animation: {
                name: animations[Math.floor(Math.random() * animations.length)],
                duration: Math.floor(Math.random() * 3) + 1,
                delay: Math.floor(Math.random()) * 0.5,
                interationCount
        }
}
~~~

### Available Animations
Animations for "bounce", "fade", "pulse", "jump", "waggle", "spin", and "beat" cane be specified in the animation.name property of an individual location. 

### Animation Information
Animations are kept in the file [markers.css](https://github.com/reggie3/react-native-webview-leaflet/blob/master/web/markers.css)  They are just keyframe animations like this:
~~~
@keyframes spin {
  50% {
    transform: rotateZ(-20deg);
    animation-timing-function: ease;
  }
  100% {
    transform: rotateZ(360deg);
  }
}
~~~

###(Format-for-the-Object-Received-by-onMove,-onMoveEnd,-onZoom,-and-onZoomEnd-Callback-Functions)
~~~
{
  center: {lat, lng},
  bounds: {
    _northEast: {lat, lng},
    _southWest: {lat, lng},
  }
}
~~~

## Changelog
## 0.2.6
* Added props for zoom, zoomEnd, move, and moveEnd listeners.
## 0.2.0 
* Removed requirement to download JavaScript files from GitHub in order for the package to work.  JavaScript files are now inline with the HTML which enables the package to work without an Internet connection.
* Added getMapCallback
## 0.0.86 
* Added ability to set map zoom level on initial render
## 0.0.85 
* First version suitable for install using npm or yarn


## LICENSE

MIT
