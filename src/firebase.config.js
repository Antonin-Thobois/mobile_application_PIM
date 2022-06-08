import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyDNC6dRf64I2Yl5O3BTFkst2QyuU8MY9w8",
  authDomain: "react-auth-pim.firebaseapp.com",
  projectId: "react-auth-pim",
  storageBucket: "react-auth-pim.appspot.com",
  messagingSenderId: "19678458948",
  appId: "1:19678458948:web:4b59e9ddb74bdb7476f811"
};

const auth = initializeApp(firebaseConfig);

export { auth };
