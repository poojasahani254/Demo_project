import * as firebase from 'firebase';
import {
    APIKEY,
    APPID,
    AUTHDOMAIN,
    DATABASEURL,
    MEASSAGINGSENDERID,
    PROJEACTID,
    STORAGEBUKECT,
    MEASUREMENTID
} from '../Constant';

let firebaseConfig = {
    apiKey: APIKEY,
    authDomain: AUTHDOMAIN,
    databaseURL: DATABASEURL,
    projectId: PROJEACTID,
    storageBucket: STORAGEBUKECT,
    messagingSenderId: MEASSAGINGSENDERID,
    appId: APPID,
    measurementId: MEASUREMENTID
};
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
export default firebase;