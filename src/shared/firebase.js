import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBq4m-nEVRoAPcJ550G4nUMLTT3E7uVSCo",
    authDomain: "magazine-ac11d.firebaseapp.com",
    projectId: "magazine-ac11d",
    storageBucket: "magazine-ac11d.appspot.com",
    messagingSenderId: "185638412160",
    appId: "1:185638412160:web:2ad95116dc28d7f70ceb65",
    measurementId: "G-WZY52CJ389"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;