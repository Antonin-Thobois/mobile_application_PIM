// Import the functions you need from the SDKs you need
import firebase, { initializeApp } from "firebase/app";
import { getAuth, updatePassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNC6dRf64I2Yl5O3BTFkst2QyuU8MY9w8",
  authDomain: "react-auth-pim.firebaseapp.com",
  projectId: "react-auth-pim",
  storageBucket: "react-auth-pim.appspot.com",
  messagingSenderId: "19678458948",
  appId: "1:19678458948:web:4b59e9ddb74bdb7476f811"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

