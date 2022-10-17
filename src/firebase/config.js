import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {

  apiKey: "AIzaSyDmGuBg7SyPzZB0kxWczmwauKZmFGHlC0w",

  authDomain: "sync-17823.firebaseapp.com",

  projectId: "sync-17823",

  storageBucket: "sync-17823.appspot.com",

  messagingSenderId: "654388606033",

  appId: "1:654388606033:web:fc0f6a4410d6cad9163470",

  measurementId: "G-P5T5KCE2LR"

} 


// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }