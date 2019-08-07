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

  export const createUserProfileDocument = async (userAuth, additionalData) => {

    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`); 

    const snapShot = await userRef.get();

    if(!snapShot.exists){
       const { displayName, email } = userAuth;
       const createdAt = new Date();

       try {
         await userRef.set({
           displayName,
           email,
           createdAt,
           ...additionalData
         })

       }catch (error) {
        console.log('error creating user', error.message);
       }
    }

    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
