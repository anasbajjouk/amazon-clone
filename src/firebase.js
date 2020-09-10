import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAYP1DQwF0yCEs5IdOXOwZLO6pCb8wRyxI",
  authDomain: "clone-3396b.firebaseapp.com",
  databaseURL: "https://clone-3396b.firebaseio.com",
  projectId: "clone-3396b",
  storageBucket: "clone-3396b.appspot.com",
  messagingSenderId: "395133108800",
  appId: "1:395133108800:web:498e095f9928b9159b95a5",
  measurementId: "G-WBL24615HY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
