import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCc2GY9Ew8R1kdBJsOJTYNHMdQtszhR2Ew",
  authDomain: "socialmedia-ep.firebaseapp.com",
  projectId: "socialmedia-ep",
  storageBucket: "socialmedia-ep.firebasestorage.app",
  messagingSenderId: "615199154754",
  appId: "1:615199154754:web:e8b3bca04f23793fd603db"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const storageRef = ref(storage);
const imagesRef = ref(storageRef, "images");

export { app, auth, db, storage, storageRef, imagesRef };
