import firebase from 'firebase/compat/app'
import { getApp } from 'firebase/app'
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyBNJ8jUSmbNfteno3Suv2aPl-6qitMyd0c",
  authDomain: "react-chat-f1fb6.firebaseapp.com",
  databaseURL: "https://react-chat-f1fb6-default-rtdb.firebaseio.com",
  projectId: "react-chat-f1fb6",
  storageBucket: "react-chat-f1fb6.appspot.com",
  messagingSenderId: "597446268644",
  // appId: "1:597446268644:web:367245a0498b7232f7fef1",
  // measurementId: "G-W1MDKPL36S"
};

firebase.initializeApp(config)
console.log(getApp())
const firestore = firebase.firestore
firestore.settings({ timestampsInSnapshots: true })

export default firebase