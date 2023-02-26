// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore/lite"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuTpb7F4weUZgP7w0q0mXviIOBcpgxUwI",
  authDomain: "ecommerce-website-aaff2.firebaseapp.com",
  projectId: "ecommerce-website-aaff2",
  storageBucket: "ecommerce-website-aaff2.appspot.com",
  messagingSenderId: "299983936129",
  appId: "1:299983936129:web:485d182dbdcb9bb28ecb80",
  measurementId: "G-YKFV8XRF1L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

export {analytics,auth,firestore}