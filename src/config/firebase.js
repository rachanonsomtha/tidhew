import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB46WILKeoxam6Bl3l8h0FjWj7RbWvB_8Y",
    authDomain: "tidhew-1ccea.firebaseapp.com",
    projectId: "tidhew-1ccea",
    storageBucket: "tidhew-1ccea.appspot.com",
    messagingSenderId: "973422875501",
    appId: "1:973422875501:web:6c7a32078a3eea62e64064",
    measurementId: "G-LNNH3Y8G2E"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }