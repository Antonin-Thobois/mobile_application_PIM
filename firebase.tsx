// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection} from 'firebase/firestore'
import { getAuth } from "firebase/auth";
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

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export const auth = getAuth(app);

// Ceci est juste une aide pour ajouter le type aux réponses db
const createCollection = (collectionName: string) => {
  return collection(firestore, collectionName)
}

// @ts-ignore
export const usersCol = createCollection('utilisateurs');
export const donorCol = createCollection('donateur');