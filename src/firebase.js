import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyALmPAcm9KGsB0GYqcmL3nSAS6-X_fFqDY",
  authDomain: "clone-235dd.firebaseapp.com",
  projectId: "clone-235dd",
  storageBucket: "clone-235dd.appspot.com",
  messagingSenderId: "3960770116",
  appId: "1:3960770116:web:43ed7a582b7bb4160cb611",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
