import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBD9Kqh6CKCjZ7prLnc-_lZwOL9zDHe3WU",
    authDomain: "crown-db-4f35b.firebaseapp.com",
    databaseURL: "https://crown-db-4f35b.firebaseio.com",
    projectId: "crown-db-4f35b",
    storageBucket: "",
    messagingSenderId: "414260603753",
    appId: "1:414260603753:web:feb3d0560cf367e3"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
