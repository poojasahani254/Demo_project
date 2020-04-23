import React,{useState, useEffect} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { geolocated } from "react-geolocated";


 const Maps = (props) => {
  //  console.log('loc',props)
     const [Position,setPosition]=useState({
         latitude:'',
         longitude:''
     })
     useEffect(()=>{
         navigator.geolocation.getCurrentPosition(function(position) {
             console.log("Latitude is :", position.coords.latitude);
             console.log("Longitude is :", position.coords.longitude);
             setPosition({
                 latitude: position.coords.latitude,
                 longitude: position.coords.longitude
             })
         },function () {

         },{enableHighAccuracy: true,timeout: 20000,
             maximumAge: 1000});
     },[])
     const onMarkerClick = () =>{

         alert('hello')
     }
    const onMarkerDragEnd = (e) =>{
         alert('dfd')

    }

     if(Position.longitude && Position.latitude){
         return (
             <Map google={props.google} zoom={14}
                  initialCenter={{
                 lat: Position.latitude,
                 lng: Position.longitude
             }}>
                 <Marker name={'Current location'}
                         draggable={true}
                         onClick={onMarkerClick}
                         onDragEnd={onMarkerDragEnd} />
                 {/*<InfoWindow>*/}
                 {/*    <div>*/}
                 {/*        <h1>{this.state.selectedPlace.name}</h1>*/}
                 {/*    </div>*/}
                 {/*</InfoWindow>*/}
             </Map>
         );
     }else{
         return <div>Error</div>
     }


}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyB9HQsSCOPZF2WZSO3Vp4s_Q8BUAN79o-o")
  })(Maps)
