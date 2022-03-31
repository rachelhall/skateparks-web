// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxKp7qRatgBq0x6h1N1REW04n5WiBihWY",
  authDomain: "skateparks-fd9c2.firebaseapp.com",
  projectId: "skateparks-fd9c2",
  storageBucket: "skateparks-fd9c2.appspot.com",
  messagingSenderId: "289424769939",
  appId: "1:289424769939:web:521bbd67ca7fbb31ef1e66",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);
export default storage;
