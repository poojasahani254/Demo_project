import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { geolocated } from "react-geolocated";


 function ScrollableTabsButtonAuto(props) {
  //  console.log('loc',props)
     return (
        <Map google={props.google} zoom={14}  initialCenter={{
          lat: 21.193820,
          lng: 72.786850
        }}>
        <Marker name={'Current location'} />
        <InfoWindow>
        </InfoWindow>
      </Map>
    );
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyB9HQsSCOPZF2WZSO3Vp4s_Q8BUAN79o-o")
  })(geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(ScrollableTabsButtonAuto))
