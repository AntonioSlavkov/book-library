import { initializeApp } from 'firebase/app'

const FirebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
}

export const InitializeFirebase = initializeApp(FirebaseConfig)


