import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD7GvJBSPf89qu0fcsu0-oLZnluzlDLFuU",
    authDomain: "rdx-counter.firebaseapp.com",
    databaseURL: "https://rdx-counter.firebaseio.com",
    projectId: "rdx-counter",
    storageBucket: "rdx-counter.appspot.com",
    messagingSenderId: "729747696720",
    appId: "1:729747696720:web:6d60735d63c89f94ce3555",
    measurementId: "G-QLK090SGXE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
// firebase.analytics();