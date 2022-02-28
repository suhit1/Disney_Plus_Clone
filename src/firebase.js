import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/storage";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB-30UF2VEtsP1CWR2bKTr-KlSeS5bqg2I",
  authDomain: "disneyplus-clone-6562a.firebaseapp.com",
  projectId: "disneyplus-clone-6562a",
  storageBucket: "disneyplus-clone-6562a.appspot.com",
  messagingSenderId: "188965098918",
  appId: "1:188965098918:web:f9c18bc42d56946a406b67",
  measurementId: "G-NL13NT48LR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
