import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyCoDiiBJUs_pYI0z8aWOmV32xOqjenwqBI",
    authDomain: "financas-66a4b.firebaseapp.com",
    projectId: "financas-66a4b",
    storageBucket: "financas-66a4b.appspot.com",
    messagingSenderId: "98976518276",
    appId: "1:98976518276:web:f596247d0122dd7b8672d1"
  };
  

 if(!firebase.apps.length){
     firebase.initializeApp(firebaseConfig);
 }

 export default firebase;

