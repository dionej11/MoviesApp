import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: "movierapp-42f56.appspot.com",
  messagingSenderId: "491187299603",
  appId: "1:491187299603:web:39456c2bd44531119a66e6",
  measurementId: "G-GDFF0D7Y39",
  databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database  = getDatabase(app);