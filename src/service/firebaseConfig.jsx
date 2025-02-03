// Import the functions you need from the Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics"; // Uncomment if needed

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfmIWoja-gjoq6TOFl34iUfKt86Xp5j-c",
  authDomain: "ai-trip-planner-825d7.firebaseapp.com",
  projectId: "ai-trip-planner-825d7",
  storageBucket: "ai-trip-planner-825d7.appspot.com", // Fixed typo
  messagingSenderId: "260476192684",
  appId: "1:260476192684:web:7e49ddc8e7727bbea91c09",
  measurementId: "G-V9JSR6N5P4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Uncomment below if using Analytics (Only in browser environment)
// export const analytics = getAnalytics(app);
