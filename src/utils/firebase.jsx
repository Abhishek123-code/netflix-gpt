// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCseTVFwwYzhV_4Q-JoTRUT-sDxtxYXTB4",
  authDomain: "netflixgpt-e3a09.firebaseapp.com",
  projectId: "netflixgpt-e3a09",
  storageBucket: "netflixgpt-e3a09.appspot.com",
  messagingSenderId: "171226991613",
  appId: "1:171226991613:web:c19355437d9b940d542794",
  measurementId: "G-Q7JPV7K5Z6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
