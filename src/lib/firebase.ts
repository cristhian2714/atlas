import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDi3bCVIJ9vpnE1Ya4h2UqXW9AvvdLz3Ak",
  authDomain: "atlas-5a34f.firebaseapp.com",
  projectId: "atlas-5a34f",
  storageBucket: "atlas-5a34f.firebasestorage.app",
  messagingSenderId: "1014381821352",
  appId: "1:1014381821352:web:0a9e56d3c90d7f7c2c719d",
  measurementId: "G-719FELFQRP"
};

// Initialize Firebase (Singleton pattern to prevent re-initialization in Next.js)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Analytics conditionally (only runs in browser)
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export const db = getFirestore(app);
export const auth = getAuth(app);
export { analytics };
