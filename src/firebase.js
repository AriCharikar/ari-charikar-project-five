import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAK7l0n66SVUNjMh_3JLKWSei44-isww28",
  authDomain: "ari-charikar-project-five.firebaseapp.com",
  databaseURL: "https://ari-charikar-project-five.firebaseio.com",
  projectId: "ari-charikar-project-five",
  storageBucket: "ari-charikar-project-five.appspot.com",
  messagingSenderId: "543660333991",
  appId: "1:543660333991:web:9fd3d6315042f86254f482"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

//Important firebase key