import { initializeApp } from 'firebase/app';
import { FacebookAuthProvider, getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCMZFyqStNqJiyU0E64Crbk1Qnu9WJWG2Q",
    authDomain: "incio-de-sesion-react.firebaseapp.com",
    projectId: "incio-de-sesion-react",
    storageBucket: "incio-de-sesion-react.firebasestorage.app",
    messagingSenderId: "723315709063",
    appId: "1:723315709063:web:edc3906f5e9ff537a4d422"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const faccebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();
export { auth, provider, faccebookProvider, githubProvider, signInWithPopup }


