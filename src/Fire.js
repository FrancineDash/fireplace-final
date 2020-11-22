import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB9gLhRQrXuflIhkSmCXZALy_tFyVF8xq0",
    authDomain: "fire-e6410.firebaseapp.com",
    databaseURL: "https://fire-e6410.firebaseio.com",
    projectId: "fire-e6410",
    storageBucket: "fire-e6410.appspot.com",
    messagingSenderId: "348444875716",
    appId: "1:348444875716:web:b293679b812c3959216291"


};

const fire=firebase.initializeApp(firebaseConfig);
export default fire;