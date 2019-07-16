import Rebase from "re-base";
import firebase from "firebase";

// Initialize Firebase
const firebaseApp = firebase.initializeApp({
    apiKey: "XXX",
    authDomain: "XXX",
    databaseURL: "XXX",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp, };
export default base;