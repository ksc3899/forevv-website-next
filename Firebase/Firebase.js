import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyChiIOb72b-AdMuMfJTziu3gH8Lt_c33Xg",
  authDomain: "website-feb-2022.firebaseapp.com",
  projectId: "website-feb-2022",
  storageBucket: "website-feb-2022.appspot.com",
  messagingSenderId: "25489200318",
  appId: "1:25489200318:web:f335a5dc885064889e3aef",
  measurementId: "G-HFJL79NBQK",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
