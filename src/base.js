import Rebase from "re-base";
import firebase from "firebase";

// Initialize Firebase
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyATk_YdJiWeUjDAV4NLY_Z1JZoiBGEaiUk",
    authDomain: "catch-of-the-day-6c5ad.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-6c5ad.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp, };
export default base;