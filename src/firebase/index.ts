import Vue from "vue";
import firebase from "firebase/app";
import { firestorePlugin } from "vuefire";

Vue.use(firestorePlugin);

const firebaseConfig = {
	apiKey: "AIzaSyChs5cKMvj26dtSY7B8DNw5g0acnqujqLU",
	authDomain: "chicco-optical.firebaseapp.com",
	databaseURL: "https://chicco-optical.firebaseio.com",
	projectId: "chicco-optical",
	storageBucket: "chicco-optical.appspot.com",
	messagingSenderId: "786905969886",
	appId: "1:786905969886:web:2f2602c9c025bed0adbe4f",
	measurementId: "G-1GR9X9PLJJ"
};

const db = firebase.initializeApp(firebaseConfig);

const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            unsubscribe();
            resolve(user);
        }, reject);
    })
};

export {getCurrentUser}
export default db;
