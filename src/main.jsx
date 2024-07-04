import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { initializeApp } from "firebase/app";
import "./fontawesome.js";

const firebaseConfig = {
  apiKey: "AIzaSyBg9BZvBVidthkZpGu-DdJcODu0KSTQ8FM",
  authDomain: "tibumoto-react.firebaseapp.com",
  projectId: "tibumoto-react",
  storageBucket: "tibumoto-react.appspot.com",
  messagingSenderId: "985739360224",
  appId: "1:985739360224:web:cba36fe9e89df3bfbc9d85",
  measurementId: "G-72QM7260QV",
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
