import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAC2Tz0fXz0hPGSdFsVj6RN-PXA64zHkKM",
    authDomain: "blog-8b598.firebaseapp.com",
    projectId: "blog-8b598",
    storageBucket: "blog-8b598.appspot.com",
    messagingSenderId: "724364309722",
    appId: "1:724364309722:web:9038ac329304b9545921e3",
    measurementId: "G-784PBEE4W4"
  };
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();
    



