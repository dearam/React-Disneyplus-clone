// import firebase from 'firebase';
// import { initializeApp } from 'firebase/app';
import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
import {GoogleAuthProvider,getAuth, signInWithPopup} from "firebase/auth";
import {useHistory} from "react-router-dom";
import { getStorage } from "firebase/storage";
import {useDispatch,useSelector} from "react-redux";
import { selectUserPhoto,selectUserName,setUserLoginDetails } from "./features/user/Userslice";


const firebaseConfig = {
    apiKey: "AIzaSyDmZueliP54RpwcoCNS-5525_2PzAWWlAI",
    authDomain: "disneyplus-clone-7ae8a.firebaseapp.com",
    projectId: "disneyplus-clone-7ae8a",
    storageBucket: "disneyplus-clone-7ae8a.appspot.com",
    messagingSenderId: "651647629203",
    appId: "1:651647629203:web:c9eec22324cfa09b4e9a66",
    measurementId: "G-3TPMLR7HSK"
  };


const firebaseApp=initializeApp(firebaseConfig);
const db=getFirestore(firebaseApp);
const auth=getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage=getStorage(firebaseApp);



export {auth,provider,storage};
export default db;
