import firebase from 'firebase';
import firestore from 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyC7G5oTPpS5Pjy0T3aQNC1k_HfrEKk_A3o',
  authDomain: 'recipe-app-7b720.firebaseapp.com',
  databaseURL: 'https://recipe-app-7b720.firebaseio.com',
  projectId: 'recipe-app-7b720',
  storageBucket: 'recipe-app-7b720.appspot.com',
  messagingSenderId: '674598069054',
  appId: '1:674598069054:web:bf8e883c65753679'
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// export firestore database
export default firebaseApp.firestore();
