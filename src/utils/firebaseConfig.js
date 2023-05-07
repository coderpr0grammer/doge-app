// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCplcSdZAq65onw3Tgc6q0ko8gWklnAdjs",
  authDomain: "doge-app-e165b.firebaseapp.com",
  projectId: "doge-app-e165b",
  storageBucket: "doge-app-e165b.appspot.com",
  messagingSenderId: "453764606130",
  appId: "1:453764606130:web:e8a622be5e7db474d081ab",
  measurementId: "G-VXT3BH320K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);