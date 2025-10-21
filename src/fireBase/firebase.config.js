// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSgnZpEzy-xQhh7BIBs6yuWmnbcBDTEEk",
  authDomain: "game-hub-ce544.firebaseapp.com",
  projectId: "game-hub-ce544",
  storageBucket: "game-hub-ce544.firebasestorage.app",
  messagingSenderId: "914658924131",
  appId: "1:914658924131:web:7e11b70e2f88a83daaca56",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
