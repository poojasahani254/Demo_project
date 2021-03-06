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
const db = firebase.firestore();

// db.settings({
//     timestampsInSnapshots: true
// });

const Api = (route,data, method) => {
    switch (method) {
        case 'post':
            return db.collection(route).add(data).then((res)=>{
                return Promise.resolve(res);
            }).catch((err)=>{
                return Promise.reject(err);
            });

        case 'postWithDoc':
            return db.collection(route).doc(data.id).set(data).then((res)=>{
                return Promise.resolve(res);
            }).catch((err)=>{
                return Promise.reject(err);
            });
        case 'get':
            return db.collection(route).get().then((res)=>{
                return Promise.resolve(res);
            }).catch((err)=>{
                return Promise.reject(err);
            });
        case 'delete':
            break;
        case 'patch':
            break;
        case 'CreatAuth':
            return firebase.auth().createUserWithEmailAndPassword(data.email,data.password)
                .then((res)=>{
                   return Promise.resolve(res);
            }).catch((err)=>{
                return Promise.reject(err);
            });
            
        case 'getAuth':
            return firebase.auth().signInWithEmailAndPassword(data.email,data.password)
                .then((res)=>{
                    return Promise.resolve(res);
                }).catch((err)=>{
                    return Promise.reject(err);
                })
        case 'GoogleAuth':
            let provider = new firebase.auth.GoogleAuthProvider();
           return  firebase.auth().signInWithPopup(provider).then((result)=> {
                return Promise.resolve(result);
            }).catch(function(error) {
                return Promise.reject(error);
            });
        case 'FacebookAuth':
            let fbprovider = new firebase.auth.FacebookAuthProvider();
            return firebase.auth().signInWithRedirect(fbprovider).then((result)=> {
               return  firebase.auth().getRedirectResult().then((result) =>{
                   return Promise.resolve(result);
                }).catch(function(error) {
                });
            }).catch(function(error) {
                return Promise.reject(error);
            });
        // case 'TwitteAuth':
        //     let Tprovider = new firebase.auth.TwitterAuthProvider();
        //     return firebase.auth().signInWithRedirect(Tprovider).then((result)=> {
        //         return  firebase.auth().getRedirectResult().then((result) =>{
        //             return Promise.resolve(result);
        //         }).catch(function(error) {
        //         });
        //     }).catch(function(error) {
        //         return Promise.reject(error);
        //     });

        default:
            return true

    }
}

export default Api;
