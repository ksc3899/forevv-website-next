import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDpDalN3VVyVWtnhfVszjaGvxxxGqFUkuM",
  authDomain: "forevv-test.firebaseapp.com",
  projectId: "forevv-test",
  storageBucket: "forevv-test.appspot.com",
  messagingSenderId: "118778131301",
  appId: "1:118778131301:web:40af843e21ea18ff60678c",
  measurementId: "G-061XS6ZR28",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
