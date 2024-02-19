// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFdlMfW9PUrVVpq1gPPnhSo146hLZrt-Y",
  authDomain: "netflix-gpt-64d99.firebaseapp.com",
  projectId: "netflix-gpt-64d99",
  storageBucket: "netflix-gpt-64d99.appspot.com",
  messagingSenderId: "898828098299",
  appId: "1:898828098299:web:c4d73f55492e76f916ae5e",
  measurementId: "G-R6KQEQRTJE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();