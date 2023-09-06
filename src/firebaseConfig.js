
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBjZjDlbKa72rasvUGUGNgkovtyPRKFavk",
  authDomain: "twitter-f6b63.firebaseapp.com",
  projectId: "twitter-f6b63",
  storageBucket: "twitter-f6b63.appspot.com",
  messagingSenderId: "592583838979",
  appId: "1:592583838979:web:6a6d86849cc6e6542eed36",
  measurementId: "G-1JQZLCP186",
};


const app = initializeApp(firebaseConfig);
export default app;
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
