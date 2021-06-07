import firebase from "firebase/app"
import "firebase/auth"

const config = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};

!firebase.apps.length ? firebase.initializeApp(config) : "";

export const auth = firebase.auth();