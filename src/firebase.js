import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyCmD5qkiw2H7psvwpb8pLX8kmApKbQ6lHU",
    authDomain: "summerinternship-bdf2d.firebaseapp.com",
    databaseURL: "https://summerinternship-bdf2d.firebaseapp.com/",
    projectId: "summerinternship-bdf2d",
    storageBucket: "summerinternship-bdf2d.appspot.com",
    messagingSenderId: "545016071750",
    appId: "1:545016071750:web:e640c2b9be20b39fd96c47"
})

export const auth = app.auth()
export default app
