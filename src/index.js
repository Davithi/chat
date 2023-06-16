import React, { createContext } from "react";
import { createRoot } from 'react-dom/client'
import "./index.css";
import App from "./App";
import  firebase  from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/app";

// https://firebase.google.com/docs/web/setup#available-libraries
  firebase.initializeApp({
  apiKey: "AIzaSyBr0oodOGIKZUnLY0ZT4CpAyj_qng9aXSA",
  authDomain: "chat-react-86b1e.firebaseapp.com",
  projectId: "chat-react-86b1e",
  storageBucket: "chat-react-86b1e.appspot.com",
  messagingSenderId: "737248441385",
  appId: "1:737248441385:web:84c38094199fe4bacc5838",
}
  )

export const Context  = createContext(null);
const auth = firebase.auth();
const firestore = firebase.firestore();

createRoot(document.getElementById("root")).render(
  <Context.Provider value={
    {
      firebase,
      auth,
      firestore
    }
  }>
    <App />
  </Context.Provider>
);
