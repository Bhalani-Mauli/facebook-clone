import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCSc5CpjUK0t6c52OZ09QWqk_axY0NZc6s",
    authDomain: "facebook-clone-ed3eb.firebaseapp.com",
    projectId: "facebook-clone-ed3eb",
    storageBucket: "facebook-clone-ed3eb.appspot.com",
    messagingSenderId: "422394809097",
    appId: "1:422394809097:web:63d21a653689ac6e0521d8",
    measurementId: "G-ZPZMZMWPFT"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  //q code login service
  const provider = new firebase.auth.GoogleAuthProvider(); 

  export { auth, provider };
  export default db;
  