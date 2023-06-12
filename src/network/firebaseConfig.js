// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDA6GtnbFJQVnhsEMoEW2ee-Hk2WunqW7E",
  authDomain: "vue-order-project.firebaseapp.com",
  projectId: "vue-order-project",
  storageBucket: "vue-order-project.appspot.com",
  messagingSenderId: "461733399141",
  appId: "1:461733399141:web:6d35fe299412293181d48c"
};

const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);