import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjEn68-p3J5Mh6UGX28PiVzt_9NG7Hksw",
  authDomain: "finance-tracker-e5627.firebaseapp.com",
  projectId: "finance-tracker-e5627",
  storageBucket: "finance-tracker-e5627.appspot.com",
  messagingSenderId: "741180877481",
  appId: "1:741180877481:web:1ae5dfdf042344ab6b97b8"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore()
const auth = getAuth();

export { db, auth }