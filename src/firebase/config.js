import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBL5awuHsgOl_vfqZA97G-i1q8MtEgW3fw",
  authDomain: "fir-store-b1757.firebaseapp.com",
  projectId: "fir-store-b1757",
  storageBucket: "fir-store-b1757.appspot.com",
  messagingSenderId: "607957905998",
  appId: "1:607957905998:web:21892b2612c5135957491f",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)