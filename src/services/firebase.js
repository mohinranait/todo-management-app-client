// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXxRIzr3a3bi4npdECP0qpoaNnlqzaVPo",
  authDomain: "task-management-app-116c8.firebaseapp.com",
  projectId: "task-management-app-116c8",
  storageBucket: "task-management-app-116c8.appspot.com",
  messagingSenderId: "620069356467",
  appId: "1:620069356467:web:7aae1a1c3bffb1214001c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;