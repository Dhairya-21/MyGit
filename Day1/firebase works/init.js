// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPuA1sEuu_ellZIGuV3qbuolA9OyZqYOA",
  authDomain: "forms-and-tables-5ab88.firebaseapp.com",
  databaseURL: "https://forms-and-tables-5ab88-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "forms-and-tables-5ab88",
  storageBucket: "forms-and-tables-5ab88.appspot.com",
  messagingSenderId: "542903514938",
  appId: "1:542903514938:web:7dee18647a7bc9446e0203",
  measurementId: "G-4LDEVFCMN7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);