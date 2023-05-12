import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'



const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_KEY,
  authDomain: process.env.REACT_APP_FB_AUT,
  projectId: process.env.REACT_APP_FB_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STOB,
  messagingSenderId: process.env.REACT_APP_MESSENID,
  appId: process.env.REACT_APP_FB_ID,
  measurementId: process.env.REACT_APP_MEAID
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
