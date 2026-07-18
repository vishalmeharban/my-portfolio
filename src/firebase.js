import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4P1imhAUAhdwfWAZJW8_LM1U7rlGpkDE",
  authDomain: "my-portfolio-29d78.firebaseapp.com",
  projectId: "my-portfolio-29d78",
  storageBucket: "my-portfolio-29d78.firebasestorage.app",
  messagingSenderId: "707184063512",
  appId: "1:707184063512:web:afb68667ac1f595e473f6d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
