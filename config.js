import firebase from 'firebase'
require("@firebase/firestore")
var firebaseConfig = {
  apiKey: "AIzaSyBgfBIULKxpJOZk4iU2EFyTt4fpYZdGoRw",
  authDomain: "barterapp-e39e0.firebaseapp.com",
  databaseURL: "https://barterapp-e39e0.firebaseio.com",
  projectId: "barterapp-e39e0",
  storageBucket: "barterapp-e39e0.appspot.com",
  messagingSenderId: "233675865359",
  appId: "1:233675865359:web:6179fef91e0acd96de127a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
  export default firebase.firestore()