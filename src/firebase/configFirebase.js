import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDqTIUa5NU26BQfPUVD2vWbfqFkIIVwnR0",
	authDomain: "crud-react-c6dfe.firebaseapp.com",
	projectId: "crud-react-c6dfe",
	storageBucket: "crud-react-c6dfe.appspot.com",
	messagingSenderId: "1001657927686",
	appId: "1:1001657927686:web:8e791ba790801380951b87",
};

const app = initializeApp(firebaseConfig);

// const db = app.firestore();
const googleAuthProvider = new GoogleAuthProvider();

export { app, googleAuthProvider };
