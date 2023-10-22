import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDTJwUzzK2zmWQ3yEuuqJbO7UnqodjwKk",
  authDomain: "bicycle-93746.firebaseapp.com",
  projectId: "bicycle-93746",
  storageBucket: "bicycle-93746.appspot.com",
  messagingSenderId: "490284958628",
  appId: "1:490284958628:web:0b0800d505bef6ec3df731"
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }