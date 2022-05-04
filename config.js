import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyBNP-usvwjoKTl6TvUnk-qp8Fim4jC0Z0s",
  authDomain: "project-67-6bb4f.firebaseapp.com",
  projectId: "project-67-6bb4f",
  storageBucket: "project-67-6bb4f.appspot.com",
  messagingSenderId: "343255074587",
  appId: "1:343255074587:web:d8be04133568ab8bd6f5be"
};
firebase.initializeApp(firebaseConfig);

export default firebase.database();