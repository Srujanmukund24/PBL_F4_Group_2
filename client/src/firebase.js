
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDfYQbVa3VnKT7CNDV4e_lXcQQjVDWbin0",
  authDomain: "hireon-f5a77.firebaseapp.com",
  projectId: "hireon-f5a77",
  storageBucket: "hireon-f5a77.appspot.com",
  messagingSenderId: "381841586141",
  appId: "1:381841586141:web:d2d2c48835709c025e6834",
  measurementId: "G-9Q87BWYTE1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth();
const db = getFirestore(app);
const storage = getStorage(app);

export{app,auth,db,storage};