// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import getAuth here

const firebaseConfig = {
  apiKey: "AIzaSyACJJnI6A_N9z6sUz-W3aUWkT6SxS6G2w4",
  authDomain: "ecommerce-f9cba.firebaseapp.com",
  projectId: "ecommerce-f9cba",
  storageBucket: "ecommerce-f9cba.firebasestorage.app",
  messagingSenderId: "1089374179219",
  appId: "1:1089374179219:web:d18ed6fd2aed15bcec2266",
  measurementId: "G-S6XPHBLE67",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Ensure you're using the app reference to get the auth instance

export { auth }; // Export auth for use in your components
