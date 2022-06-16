// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiudDZz34z5NUltu-ILW1QYz1Nxc1Ky8o",
  authDomain: "fir-auth-538f8.firebaseapp.com",
  projectId: "fir-auth-538f8",
  storageBucket: "fir-auth-538f8.appspot.com",
  messagingSenderId: "222426814282",
  appId: "1:222426814282:web:c813bdc346fd8e954c53b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);