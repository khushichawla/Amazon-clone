import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAHv9EMz1506P-HBGzkzZS_s9YeQddizVU",
  authDomain: "challenge-a4533.firebaseapp.com",
  projectId: "challenge-a4533",
  storageBucket: "challenge-a4533.appspot.com",
  messagingSenderId: "190344260791",
  appId: "1:190344260791:web:2d154d5aab45c234adb132",
  measurementId: "G-H96VW2Q0KH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };