// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBTJ_1WPgpnDYzbva4egtIAtmG5nGVlDIw",
  authDomain: "resturantes-ingweb1.firebaseapp.com",
  projectId: "resturantes-ingweb1",
  storageBucket: "resturantes-ingweb1.appspot.com",
  messagingSenderId: "374531972734",
  appId: "1:374531972734:web:f5188822344d9cfee1822f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const FirebaseFirestore = getFirestore(app);

export {
  FirebaseFirestore,
}
