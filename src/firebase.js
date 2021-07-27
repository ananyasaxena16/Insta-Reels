import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage'

firebase.initializeApp({
    apiKey: "AIzaSyCj4m-hToQbzbc0H6gPzfo7qcfVGRwmAlE",
    authDomain: "reels-58ba6.firebaseapp.com",
    projectId: "reels-58ba6",
    storageBucket: "reels-58ba6.appspot.com",
    messagingSenderId: "1058155242583",
    appId: "1:1058155242583:web:c2de706cb7ea676aba6f12"
  })
export const auth = firebase.auth();
const firestore = firebase.firestore();//isko export ni karware, bcoz agar hum ye dedege to v apna collection bna skta h to hum object bna k sirf vo cheez export karege jo needed hoga
export const database={
   
    users:firestore.collection('users'),
    posts:firestore.collection('posts'),
    comments:firestore.collection('comments'),

    getCurrentTimeStamp : firebase.firestore.FieldValue.serverTimestamp

}
export const storage = firebase.storage();
// export default firebase;