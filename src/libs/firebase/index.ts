import firebase from 'firebase/app';
import 'firebase/firestore';
import { consoleConfig } from './config';

try {
  firebase.initializeApp(consoleConfig);
} catch (err) {
  // we skip the "already exists" message which is
  // not an actual error when we're hot-reloading
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack);
  }
}

export const firestore = firebase.firestore();

export default firebase;
