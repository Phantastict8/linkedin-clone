import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA5qvXAoMl-LLXki1QszctouBYB-EHKwBM",
    authDomain: "linkedin-clone-e86be.firebaseapp.com",
    projectId: "linkedin-clone-e86be",
    storageBucket: "linkedin-clone-e86be.appspot.com",
    messagingSenderId: "505081995724",
    appId: "1:505081995724:web:15ad24afebd548c8c97d69"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
