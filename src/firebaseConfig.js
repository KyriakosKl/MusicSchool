import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAPL6-IBZp7I-o2In-u5MzBGIwCWIr5s4E",
    authDomain: "musicschoolproject-71436.firebaseapp.com",
    projectId: "musicschoolproject-71436",
    storageBucket: "musicschoolproject-71436.appspot.com",
    messagingSenderId: "134197224645",
    appId: "1:134197224645:web:26c3c473d54a0c63ecbcac",
    measurementId: "G-HWV25G1Y43"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);


export { auth, analytics};
