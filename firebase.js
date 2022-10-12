import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDasFhn5Z2BHOeyU3uq5c3uU15OoMLMaes",
  authDomain: "crud-1-8d44e.firebaseapp.com",
  databaseURL: "https://crud-1-8d44e-default-rtdb.firebaseio.com",
  projectId: "crud-1-8d44e",
  storageBucket: "crud-1-8d44e.appspot.com",
  messagingSenderId: "871525137880",
  appId: "1:871525137880:web:4e3c6f3dd3c6139ca7c6ad"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
