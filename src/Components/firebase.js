// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9ro4IPTbMO1_Z8yI8GEkDqp0nz0wx8Js",
  authDomain: "offthegrid-d62de.firebaseapp.com",
  projectId: "offthegrid-d62de",
  storageBucket: "offthegrid-d62de.appspot.com",
  messagingSenderId: "730328259339",
  appId: "1:730328259339:web:3068752f232af2a7cea00e",
  measurementId: "G-CP1DQSG542"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Get the Auth service for the default app
export const auth = getAuth(app);

export const onAuthStateChange = (callback) => {
  return onAuthStateChanged(auth, (user) => {
    if (user) {
      callback({ loggedIn: true, email: user.email });
    } else {
      callback({ loggedIn: false });
    }
  });
};