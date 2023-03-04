import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth, GoogleAuthProvider } from "firebase/auth";

// Configure firebase
const firebaseConfig = {
    apiKey: "AIzaSyBVjA_BJlKpRFQ_XDfUG3hJ8QClJDoC1dw",
    authDomain: "photo-website-b0612.firebaseapp.com",
    projectId: "photo-website-b0612",
    storageBucket: "photo-website-b0612.appspot.com",
    messagingSenderId: "306940953381",
    appId: "1:306940953381:web:b5fd9db025b6ad189c90cc"
};

// Initialize firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth and get reference to the service
export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
