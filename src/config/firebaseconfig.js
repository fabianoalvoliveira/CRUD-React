// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcsWgGc7A7YeVrPI860Gjp-Px_mogLZbQ",
  authDomain: "shoplist-52823.firebaseapp.com",
  projectId: "shoplist-52823",
  storageBucket: "shoplist-52823.appspot.com",
  messagingSenderId: "612061167799",
  appId: "1:612061167799:web:7480d02d1983d987b58d32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app)
export default database