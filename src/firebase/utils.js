/** @format */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore, doc, setDoc, addDoc, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN07GTmJ9NkVSJ4_Sn8OhaGpyodc6kGdo",
  authDomain: "cloob-sales.firebaseapp.com",
  projectId: "cloob-sales",
  storageBucket: "cloob-sales.appspot.com",
  messagingSenderId: "873744204413",
  appId: "1:873744204413:web:4baf5b91ebd1804b6ea714",
};
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export { doc, setDoc, addDoc, collection };
