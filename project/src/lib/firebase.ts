import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA31cCelnHvvagE3aQnz1D0F8ujYV4jAU0",
  authDomain: "sourcemods-5b36a.firebaseapp.com",
  databaseURL: "https://sourcemods-5b36a-default-rtdb.firebaseio.com",
  projectId: "sourcemods-5b36a",
  storageBucket: "sourcemods-5b36a.firebasestorage.app",
  messagingSenderId: "267008222016",
  appId: "1:267008222016:web:c0a418b1c83b67b63fd0a5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);