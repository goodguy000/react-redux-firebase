import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD3Ej_7jN-ubT3jH-_VVwYzfh6Ep36m5YM",
    authDomain: "react-firebase-25850.firebaseapp.com",
    databaseURL: "https://react-firebase-25850.firebaseio.com",
    projectId: "react-firebase-25850",
    storageBucket: "",
    messagingSenderId: "356482275438",
    appId: "1:356482275438:web:3dda3ad39d473548"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;