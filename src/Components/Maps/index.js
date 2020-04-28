import React,{useState, useEffect} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Geocode from "react-geocode";
import InputMap from './InputMap';
import {makeStyles} from "@material-ui/core/styles";

Geocode.setApiKey("AIzaSyArJZue4WWX7ori7MhT5fzXAAtLxrxZtks");
Geocode.setLanguage("en");
Geocode.setRegion("es");
// Geocode.enableDebug();

 const Maps = (props) => {
   // console.log('loc',props)
     const classes = useStyles();
     const [Position,setPosition]=useState({
         latitude:'',
         longitude:''
     })
     const [show,setShow] = useState(false);
     const [activeMarker,setActiveMarker] = useState({});
     const [address,setAddress] = useState();
     const [addressobj,setAddressob] = useState();


     // document.documentElement.style.overflowX = 'hidden';
     useEffect(()=>{
         navigator.geolocation.getCurrentPosition((position)=> {

             console.log("Latitude is :", position.coords.latitude);
             console.log("Longitude is :", position.coords.longitude);

             setPosition({
                 latitude: position.coords.latitude,
                 longitude: position.coords.longitude
             })
             AddressFromLatLng(position.coords.latitude,position.coords.longitude)

         }, ()=> {

         },{
             enableHighAccuracy: true});
     },[]);

     const onMarkerClick = (props, marker, e) =>{

         setActiveMarker(marker);
         setShow(true);
         AddressFromLatLng(Position.latitude,Position.longitude)
         // console.log('maps',props.google.maps.Marker)
     }

    const  onMapClicked = (props, map, e) => {
            setShow(false)
            setActiveMarker(null);
    };

     const AddressFromLatLng = (lat,lng) =>{
         Geocode.fromLatLng(lat, lng).then(
             response => {
                 const address = response.results[0].formatted_address;
                 setAddress(address)
                 setAddressob(response.results[0].address_components)
                 console.log(response)
             },
             error => {
                 console.error(error);
             }
         );
     }

     const onMarkerDragEnd = (props, map,e) =>{
         setPosition({
             latitude: e.latLng.lat(),
             longitude: e.latLng.lng()
         })
         AddressFromLatLng(e.latLng.lat(),e.latLng.lng())
     };

     const location={
         lat: Position.latitude,
         lng: Position.longitude
     };

     if(Position.longitude && Position.latitude){
         return (
             <div className={classes.inputContainer}>
                 <div className={classes.mappcontainer}>
                     <InputMap
                        address={addressobj}
                        CombineAdd={address}
                     />
                 </div>
                 <div className={classes.container}>

                 <Map
                     google={props.google} zoom={14}
                     initialCenter={location}
                     onClick={onMapClicked}
                     style={{width: '100%', height: '100%'}}
                 >
                     <Marker
                         // position={location}
                         name={'location'}
                         draggable={true}
                         onClick={onMarkerClick}
                         onDragend={onMarkerDragEnd}
                     />
                     <InfoWindow
                         marker={activeMarker}
                         visible={show}>
                         <div>
                             <h1>Location Detail</h1>
                             <div>Lat:  {Position.latitude}</div>
                             <div>Long:  {Position.longitude}</div>
                             <div>Address:  {address}</div>
                         </div>
                     </InfoWindow>
                 </Map>
                 </div>
             </div>

         );
     }
     else{

         return <div>Check Your Internet Connection</div>
     }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyArJZue4WWX7ori7MhT5fzXAAtLxrxZtks")
})(Maps)

const useStyles = makeStyles((theme) => ({
    container: {
        width: '30%',
    }, mappcontainer: {
        width: '28%',
        '@media(max-height:767px)':{
            height:'70%',
            // width:'28%'
        },
        '@media(max-width:767px)':{
            width:'72%'
        }

    },inputContainer: {
        display: 'flex',
        '@media(max-width:767px)':{
            flexWrap: 'wrap'
        }
    }
}))
