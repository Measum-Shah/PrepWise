// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbViGpCCA40vbGl6qa-VKN9MRhPVJ3UFg",
  authDomain: "prepwise-f3de4.firebaseapp.com",
  databaseURL: "https://prepwise-f3de4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "prepwise-f3de4",
  storageBucket: "prepwise-f3de4.firebasestorage.app",
  messagingSenderId: "908472022260",
  appId: "1:908472022260:web:7a51ed1cdab643a63a5aa1",
  measurementId: "G-6GVTJFEP6J"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);