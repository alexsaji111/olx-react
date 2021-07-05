import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAmSPbWKEXRGkYdrqD3eOyMPgcOiAronM0",
    authDomain: "olx-clone-364a6.firebaseapp.com",
    projectId: "olx-clone-364a6",
    storageBucket: "olx-clone-364a6.appspot.com",
    messagingSenderId: "672028273028",
    appId: "1:672028273028:web:9c6c58483749d639d555d1"
};

export default firebase.initializeApp(firebaseConfig);