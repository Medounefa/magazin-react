
import { initializeApp } from "firebase/app";
import { getFirestore,onSnapshot, collection } from "firebase/firestore";
import { getAuth} from "firebase/auth";
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHFAxe4G0q6pjXXFgZEiw3G2qgWBe_8nI",
  authDomain: "magazin-692e3.firebaseapp.com",
  projectId: "magazin-692e3",
  storageBucket: "magazin-692e3.appspot.com",
  messagingSenderId: "696948797919",
  appId: "1:696948797919:web:aaaf81b7a2609e4838946a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)
export const auth = getAuth(app)

export let currentUser ={}
export let msgError ={}

 export function setCurrentUser(newUser){
   
   onSnapshot(collection(firestore,"users"),(snapshot)=>{
     let isFound = false
     snapshot.forEach((snap)=>{
       let user = snap.data()

       if(user.email===newUser.email){
         if(user.password === newUser.password){
           currentUser = user
           isFound = true
         }else{
           msgError = 'Mot de passe incorrect'
           alert(msgError)
         }
       }
     })
     if(!isFound){
       msgError = 'Adress email introuvable'
       alert(msgError)
     }
   })
 }