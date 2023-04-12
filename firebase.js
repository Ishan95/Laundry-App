import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCuoi-Qu6_lTITXoPQL3BtRZh9FETizgwU",
  authDomain: "laundry-app-8fd1e.firebaseapp.com",
  projectId: "laundry-app-8fd1e",
  storageBucket: "laundry-app-8fd1e.appspot.com",
  messagingSenderId: "512592792332",
  appId: "1:512592792332:web:d6ec139a3d425805031729"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export {auth, db};