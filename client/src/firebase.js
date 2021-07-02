import firebase from "firebase/app";
import "firebase/auth";


// Your web app's Firebase configuration
const config = {
    apiKey: "AIzaSyChLZpR27cuF_EtBko9agaQO-vhtVts5So",
    authDomain: "shopeaze-f2b3b.firebaseapp.com",
    projectId: "shopeaze-f2b3b",
    storageBucket: "shopeaze-f2b3b.appspot.com",
    messagingSenderId: "552986815190",
    appId: "1:552986815190:web:956ea3626569777ab87777"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  export const auth = firebase.auth();
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();