// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAipHbaMtwfUQ0XdIRld_gIFSw_ScfK-c",
  authDomain: "netflix-gpt-omkeshri.firebaseapp.com",
  projectId: "netflix-gpt-omkeshri",
  storageBucket: "netflix-gpt-omkeshri.appspot.com",
  messagingSenderId: "373017678932",
  appId: "1:373017678932:web:cd3ed2854a3889a76a49c1",
  measurementId: "G-H3QPW82MQB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
