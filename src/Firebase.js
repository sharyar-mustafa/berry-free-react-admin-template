import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue, child, get} from "firebase/database";
import {getAuth} from "firebase/auth";

import { getStorage,ref as imageRef ,uploadBytes} from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAuBPMVcxpuTmvC9uTIk56cgi4eqfPHzKw",
  authDomain: "resturantpos-4ae78.firebaseapp.com",
  databaseURL: "https://resturantpos-4ae78.firebaseio.com",
  projectId: "resturantpos-4ae78",
  storageBucket: "resturantpos-4ae78.appspot.com",
  messagingSenderId: "237852581808",
  appId: "1:237852581808:web:0bf1237852a157bb834075",
  measurementId: "G-EFYDVGR3XE"
};


const app = initializeApp(firebaseConfig);
export const authenticatio = getAuth(app);
export const database = getDatabase(app);

export { app, getDatabase, ref, push, onValue, child, get,imageRef, getStorage,uploadBytes}; 