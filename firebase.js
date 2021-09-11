import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBcEZVpIzi5KjBmNwnw3hslBIcZ5LbzbqQ",
  authDomain: "clone-da469.firebaseapp.com",
  projectId: "clone-da469",
  storageBucket: "clone-da469.appspot.com",
  messagingSenderId: "1089811657806",
  appId: "1:1089811657806:web:e6e0233628d43995e1bf1f",
};
const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = firebaseApp.firestore();
const storage = firebaseApp.storage();
export { db, storage };
