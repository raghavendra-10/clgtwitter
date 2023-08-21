// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjZjDlbKa72rasvUGUGNgkovtyPRKFavk",
  authDomain: "twitter-f6b63.firebaseapp.com",
  projectId: "twitter-f6b63",
  storageBucket: "twitter-f6b63.appspot.com",
  messagingSenderId: "592583838979",
  appId: "1:592583838979:web:6a6d86849cc6e6542eed36",
  measurementId: "G-1JQZLCP186"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
export const auth = getAuth(app);
const db = getFirestore(app); 
export {db};