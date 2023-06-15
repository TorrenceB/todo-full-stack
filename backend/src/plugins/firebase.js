// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7CIK3ZelnZuXPIQtkPmQmE0p5UccaHxM",
  authDomain: "full-stack-todo-fa10b.firebaseapp.com",
  projectId: "full-stack-todo-fa10b",
  storageBucket: "full-stack-todo-fa10b.appspot.com",
  messagingSenderId: "886047373566",
  appId: "1:886047373566:web:2d2e4a4a2e4bf063664daf",
  measurementId: "G-QQVG3CQRJJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
