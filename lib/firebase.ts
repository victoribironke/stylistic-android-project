import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD60IYfOFPIXsXfeyDB_PDUoKpKiuOeL1U",
  authDomain: "stylistic-io.firebaseapp.com",
  projectId: "stylistic-io",
  storageBucket: "stylistic-io.appspot.com",
  messagingSenderId: "529281247144",
  appId: "1:529281247144:web:73611c51a7408b63645f9d",
  measurementId: "G-Z8QQC7CLMD",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
