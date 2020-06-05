import firebase from 'firebase/app';
import { firebaseConfig } from './config';

try {
  firebase.initializeApp(firebaseConfig);
} catch (e) {
  if (!/alrady exists/.test(e.message)) {
    console.error(`Firebase initialization error ${e.stack}`);
  }
}

export default firebase;
