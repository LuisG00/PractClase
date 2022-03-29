import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyDCBTlfKw9XE4M7RP6keO0b2KKxsN8Rq5s",
    authDomain: "proresta-59628.firebaseapp.com",
    projectId: "proresta-59628",
    storageBucket: "proresta-59628.appspot.com",
    messagingSenderId: "479260043034",
    appId: "1:479260043034:web:d57b9bd528731c7d1aaea3"
  }

export const firebaseApp = firebase.initializeApp(firebaseConfig)