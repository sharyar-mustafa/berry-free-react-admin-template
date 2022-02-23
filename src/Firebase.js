// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyAuBPMVcxpuTmvC9uTIk56cgi4eqfPHzKw",

  authDomain: "resturantpos-4ae78.firebaseapp.com",

  databaseURL: "https://resturantpos-4ae78.firebaseio.com",

  projectId: "resturantpos-4ae78",

  storageBucket: "resturantpos-4ae78.appspot.com",

  messagingSenderId: "237852581808",

  appId: "1:237852581808:web:6bbec6bd7cdd7cd6834075",

  measurementId: "G-BNDH4MESRE"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const auth = getAuth(app);

export function singup(email, password) {

  return auth.createUserWithEmailAndPassword( email, password);

}