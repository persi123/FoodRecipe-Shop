import firebase from "firebase";
//import firebase from "firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyAEjwLbYqA4wVHl1nxX6vulZuPeC4LJPXQ",
  authDomain: "my-blog-23800.firebaseapp.com",
  databaseURL: "https://my-blog-23800.firebaseio.com",
  projectId: "my-blog-23800",
  storageBucket: "my-blog-23800.appspot.com",
  messagingSenderId: "667914386255",
  appId: "1:667914386255:web:6b54804de69516064fa33a",
  measurementId: "G-XFJW3303C3"
};
// Initialize Firebase
var fire = firebase.initializeApp(firebaseConfig);
export default fire;
