// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-1c001.firebaseapp.com",
  projectId: "mern-blog-1c001",
  storageBucket: "mern-blog-1c001.appspot.com",
  messagingSenderId: "994947094938",
  appId: "1:994947094938:web:827399f404aa7eb492c223"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);