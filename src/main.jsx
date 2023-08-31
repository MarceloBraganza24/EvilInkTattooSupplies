import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../src/sass/main.css'
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDItGxv1AGNo3mz_ORg5H-IK5xBWC6h0Iw",
  authDomain: "evilinktattoosupplies-99252.firebaseapp.com",
  projectId: "evilinktattoosupplies-99252",
  storageBucket: "evilinktattoosupplies-99252.appspot.com",
  messagingSenderId: "387396259239",
  appId: "1:387396259239:web:20925a98dbb1ca45f3fa82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;

ReactDOM.createRoot(document.getElementById('root')).render(
  

  <App />

  
)
