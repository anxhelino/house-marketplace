// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqsGnWzUO0OpoWD9DyCri5IRXWesaUTHw",
  authDomain: "house-marketplace-app-b8f8d.firebaseapp.com",
  projectId: "house-marketplace-app-b8f8d",
  storageBucket: "house-marketplace-app-b8f8d.appspot.com",
  messagingSenderId: "940091050828",
  appId: "1:940091050828:web:36126148ffdd92ce3c1de9",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
