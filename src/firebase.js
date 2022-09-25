
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_2Vr5ZLbyekabeQ8bfEj_3F_rmFeo5F8",
  authDomain: "todolist-74a3a.firebaseapp.com",
  projectId: "todolist-74a3a",
  storageBucket: "todolist-74a3a.appspot.com",
  messagingSenderId: "394917900450",
  appId: "1:394917900450:web:3c72810e764ba0d4be67fb"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);