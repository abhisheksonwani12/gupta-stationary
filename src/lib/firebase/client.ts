import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const isOldProject =
  process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID === "instant-stationary" ||
  process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN?.includes("instant-stationary") ||
  process.env.NEXT_PUBLIC_FIREBASE_API_KEY?.startsWith("AIzaSyBR68");

export const firebaseConfig = {
  apiKey: (!isOldProject && process.env.NEXT_PUBLIC_FIREBASE_API_KEY) || "AIzaSyAWAtPNsx_quzCkFDj873kppq26GdiPLNg",
  authDomain: (!isOldProject && process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN) || "gupta-ecom.firebaseapp.com",
  projectId: (!isOldProject && process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) || "gupta-ecom",
  storageBucket: (!isOldProject && process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET) || "gupta-ecom.firebasestorage.app",
  messagingSenderId: (!isOldProject && process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID) || "205605838832",
  appId: (!isOldProject && process.env.NEXT_PUBLIC_FIREBASE_APP_ID) || "1:205605838832:web:6e13704baacc63266c4735",
  measurementId: (!isOldProject && process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID) || "G-NEWVS5KYLW",
};

// Initialize Firebase App Singleton safely across Next.js SSR / Client
export const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();

// Configure Google provider options
googleProvider.setCustomParameters({
  prompt: "select_account",
});
