import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };
