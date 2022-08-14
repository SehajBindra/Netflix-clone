import firebase from "firebase";




// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBjMqMMLZSyxig2K-65yIWlCkeBYfgdHCw",
    authDomain: "netflix-clone-42487.firebaseapp.com",
    projectId: "netflix-clone-42487",
    storageBucket: "netflix-clone-42487.appspot.com",
    messagingSenderId: "369968805031",
    appId: "1:369968805031:web:2ba2e06f70d79734f31782",
    measurementId: "G-0WMSYT1KCL"
  };


  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const db = firebaseapp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;

