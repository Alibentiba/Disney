import firebase from "firebase/app" 

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc, getDocs } from "firebase/firestore";
import "firebase/auth" 


const firebaseConfig = {
  apiKey: "AIzaSyC2a8wDHt4TS6evL6OVo45cKB65ofxuSEg",
  authDomain: "diseny-973a3.firebaseapp.com",
  projectId: "diseny-973a3",
  storageBucket: "diseny-973a3.appspot.com",
  messagingSenderId: "726488443563",
  appId: "1:726488443563:web:7515fd7de681d5a27ca5ee",
  measurementId: "G-20SHN5HMEL"
};
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const storage = getStorage(app)
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  export { auth,provider,storage};
  export default db;
 