import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJGKksrgYjLLq4maaNcjzUmTwoH0Rr12Q",
  authDomain: "blog2-a54b6.firebaseapp.com",
  projectId: "blog2-a54b6",
  storageBucket: "blog2-a54b6.appspot.com",
  messagingSenderId: "114251065559",
  appId: "1:114251065559:web:e36021362cfb1954702892",
  measurementId: "G-CMP384HWY3"
}
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();


