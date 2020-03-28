import React,{useEffect} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 function ScrollableTabsButtonAuto(props) {
     return (
        <Map google={props.google} zoom={14}>
        <Marker name={'Current location'} />
        <InfoWindow>
        </InfoWindow>
      </Map>
    );
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyB9HQsSCOPZF2WZSO3Vp4s_Q8BUAN79o-o")
  })(ScrollableTabsButtonAuto)
