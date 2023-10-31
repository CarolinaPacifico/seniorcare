import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBfewFG5Kuha9B-os2d1SjU_EuZ7Fk5bic",
  authDomain: "scs-tcc.firebaseapp.com",
  projectId: "scs-tcc",
  storageBucket: "scs-tcc.appspot.com",
  messagingSenderId: "21930336213",
  appId: "1:21930336213:web:be3b2ad27f82cb3abf675c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore (app)
const auth = getAuth(app);

export { auth, db }