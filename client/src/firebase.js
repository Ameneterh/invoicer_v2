// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "starlight-blog.firebaseapp.com",
  projectId: "starlight-blog",
  storageBucket: "starlight-blog.appspot.com",
  messagingSenderId: "665922107030",
  appId: "1:665922107030:web:298b5d573db6751ac534b7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
