import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
    apiKey: "AIzaSyBNJ8jUSmbNfteno3Suv2aPl-6qitMyd0c",
    authDomain: "react-chat-f1fb6.firebaseapp.com",
    databaseURL: "https://react-chat-f1fb6-default-rtdb.firebaseio.com",
    projectId: "react-chat-f1fb6",
    storageBucket: "react-chat-f1fb6.appspot.com",
    messagingSenderId: "597446268644",
    appId: "1:597446268644:web:9d214c9467e5e15df7fef1",
    measurementId: "G-W5EPNJ7J8Q"
};
firebase.initializeApp(config);
export const firestore = firebase.firestore();
export const auth = firebase.auth()
export default firebase;