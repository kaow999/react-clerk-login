// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQIPLVloBll_0D9bfCZQB0X7dW0Oas5X0",
  authDomain: "login-clerk.firebaseapp.com",
  projectId: "login-clerk",
  storageBucket: "login-clerk.appspot.com",
  messagingSenderId: "684162019034",
  appId: "1:684162019034:web:74c235808595adc01dbfe3",
  measurementId: "G-RDGMR3VGHH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);