// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcQMJP-d7XZotv7KsR5jH3odT2EE6jbgk",
  authDomain: "split-879f3.firebaseapp.com",
  projectId: "split-879f3",
  storageBucket: "split-879f3.appspot.com",
  messagingSenderId: "979574927643",
  appId: "1:979574927643:web:e1ad558b01cae1b93223be",
  measurementId: "G-R71JNVXKXW"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
auth.useDeviceLanguage();