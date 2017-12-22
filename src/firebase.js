import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCqA59XlpfY_GCVhKOZ4Wv1QjB8k2ogFHs",
    authDomain: "todo-app-5e7de.firebaseapp.com",
    databaseURL: "https://todo-app-5e7de.firebaseio.com",
    projectId: "todo-app-5e7de",
    storageBucket: "todo-app-5e7de.appspot.com",
    messagingSenderId: "70016720995"
  };

  firebase.initializeApp(config);

  export default firebase;