// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// Your web app's Firebase configuration

const app = firebase.initializeApp({
  apiKey: "AIzaSyDBpEvy7j3TZ3RNON802inuPJ3k05SayZg",
  authDomain: "auth-challenge9.firebaseapp.com",
  projectId: "auth-challenge9",
  storageBucket: "auth-challenge9.appspot.com",
  messagingSenderId: "749256840014",
  appId: "1:749256840014:web:2dcfaa8ebb2aae5955441f",
  measurementId: "G-40Q0VM0WWX",
});

export const auth = app.auth();
export default app;
