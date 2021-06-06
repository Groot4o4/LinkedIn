import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyBr93B8X4cCLj3j7gm3g4TdAr6vgUROsvQ",
    authDomain: "linkedin-clone-a0acb.firebaseapp.com",
    projectId: "linkedin-clone-a0acb",
    storageBucket: "linkedin-clone-a0acb.appspot.com",
    messagingSenderId: "1008273338369",
    appId: "1:1008273338369:web:c5b1a8426b5a8056b71000"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }