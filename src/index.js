import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAZ35UjHd6zG7Lajyl9yjZ5hnlS90Uh1WI",
  authDomain: "hotelcheaply.firebaseapp.com",
  projectId: "hotelcheaply",
  storageBucket: "hotelcheaply.appspot.com",
  messagingSenderId: "181101444095",
  appId: "1:181101444095:web:dc1573972a1452a61285ca",
  measurementId: "G-JXV2FED388"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export default db;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
); 
