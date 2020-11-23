import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCIggc4CbLbV_m2zcov3aPE1Yp72cqDenE",
  authDomain: "imessage-clone-redux-8ae36.firebaseapp.com",
  databaseURL: "https://imessage-clone-redux-8ae36.firebaseio.com",
  projectId: "imessage-clone-redux-8ae36",
  storageBucket: "imessage-clone-redux-8ae36.appspot.com",
  messagingSenderId: "510719120179",
  appId: "1:510719120179:web:8180bb3c8548ca9c7f6446",
  measurementId: "G-1KM71RXC7G",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
