// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAA4ncwuTlLAFeCxFqUuiwiAruCFxt9xUw",
  authDomain: "on-trackz.firebaseapp.com",
  projectId: "on-trackz",
  storageBucket: "on-trackz.appspot.com",
  messagingSenderId: "981394511566",
  appId: "1:981394511566:web:317a74e25422145c6b629f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;