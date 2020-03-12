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
firebase.analytics();
const db = firebase.firestore();
db.settings({
    timestampsInSnapshots: true
});

const Api = (route,data, method) => {
    switch (method) {
        case 'post':
            return db.collection(route).add(data).then((res)=>{
                return Promise.resolve(res);
            }).catch((err)=>{
                return Promise.reject(err);
            });
        case 'get':
            return db.collection(route).add(data).then((res)=>{
                return Promise.resolve(res);
            }).catch((err)=>{
                return Promise.reject(err);
            });
        case 'delete':
            return db.collection(route).add(data).then((res)=>{
                return Promise.resolve(res);
            }).catch((err)=>{
                return Promise.reject(err);
            });
        case 'patch':
            return db.collection(route).add(data).then((res)=>{
                return Promise.resolve(res);
            }).catch((err)=>{
                return Promise.reject(err);
            });
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
    }
};
export default Api;
