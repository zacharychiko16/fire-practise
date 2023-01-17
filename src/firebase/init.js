// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5pDuQP2M8TVEjPoSNj_34Ugx8DC8Jnj8",
  authDomain: "first-fire-ef329.firebaseapp.com",
  projectId: "first-fire-ef329",
  storageBucket: "first-fire-ef329.appspot.com",
  messagingSenderId: "131295039382",
  appId: "1:131295039382:web:779098d5f48f909f6797b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()