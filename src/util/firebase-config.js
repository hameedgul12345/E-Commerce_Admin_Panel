// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFmPkRIj4dxmMGI9iNLFZKaEknICVJhas",
  authDomain: "e-commerce-admin-pannel-123.firebaseapp.com",
  projectId: "e-commerce-admin-pannel-123",
  storageBucket: "e-commerce-admin-pannel-123.firebasestorage.app",
  messagingSenderId: "944633441793",
  appId: "1:944633441793:web:3c4ed67a0429429adb9a00",
  measurementId: "G-8WPGK0E0WR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);