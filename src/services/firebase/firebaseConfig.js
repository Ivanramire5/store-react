
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCOFOyhyYsT4thz2X7aMskdrcBO9p5dUhY",
  authDomain: "retro-store-83151.firebaseapp.com",
  projectId: "retro-store-83151",
  storageBucket: "retro-store-83151.appspot.com",
  messagingSenderId: "1052314104667",
  appId: "1:1052314104667:web:93ecc173a748a4d86b607e",
  measurementId: "G-MNB3ZFXPDQ"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)