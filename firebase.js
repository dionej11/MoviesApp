// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC29ZFllnC60cwInnPFL8LCAW1DI7q_KRE",
  authDomain: "movierapp-42f56.firebaseapp.com",
  projectId: "movierapp-42f56",
  storageBucket: "movierapp-42f56.appspot.com",
  messagingSenderId: "491187299603",
  appId: "1:491187299603:web:39456c2bd44531119a66e6",
  measurementId: "G-GDFF0D7Y39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);