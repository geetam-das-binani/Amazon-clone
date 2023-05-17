import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseApp = firebase.initializeApp({
	// For Firebase JS SDK v7.20.0 and later, measurementId is optional
	apiKey: "AIzaSyAypd4NmO49AnXYRZtjWGdkW4bvF9DKjHA",
	authDomain: "clone-828e2.firebaseapp.com",
	projectId: "clone-828e2",
	storageBucket: "clone-828e2.appspot.com",
	messagingSenderId: "816496860301",
	appId: "1:816496860301:web:28332837c08b9422d416c4",
	measurementId: "G-MCRDNRB9FK",
});

const auth = firebase.auth();
export { auth };
