import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBIvmHYWgQq2fQeMV6DTxJA9zWNEoantfw",
  authDomain: "netflix-clone-6f0c7.firebaseapp.com",
  projectId: "netflix-clone-6f0c7",
  storageBucket: "netflix-clone-6f0c7.appspot.com",
  messagingSenderId: "701107031631",
  appId: "1:701107031631:web:646132f6f431a5e079243a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;