import firebase from "firebase";
  
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCxOAf2AJ-AJgAsP-gb9pq2jpDS_9k7hak",
    authDomain: "todo-app-cp-72f8a.firebaseapp.com",
    projectId: "todo-app-cp-72f8a",
    storageBucket: "todo-app-cp-72f8a.appspot.com",
    messagingSenderId: "147611646072",
    appId: "1:147611646072:web:2eb19b84e4c63ab605d58d",
    measurementId: "G-1NT700HYMB"
});

const db = firebaseApp.firestore();

export default db;