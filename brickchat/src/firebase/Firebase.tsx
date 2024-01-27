import * as firebase from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {  
    apiKey: "AIzaSyBJOGGha2VhZ_UOF0HHmfHQeAH1vQbWxgU",
    authDomain: "brickchat-1b882.firebaseapp.com",
    projectId: "brickchat-1b882",
    storageBucket: "brickchat-1b882.appspot.com",
    messagingSenderId: "632509133082",
    appId: "1:632509133082:web:db798071c5d4f2b7c83ca3",
    measurementId: "G-L652ZVCKLP"
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app