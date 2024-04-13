import {initializeApp} from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyBEUamPGmMhZgZ5xbZkXBuCI-AqIJAfiUY",
    authDomain: "fooddeleiveryapp-b2d8a.firebaseapp.com",
    projectId: "fooddeleiveryapp-b2d8a",
    storageBucket: "fooddeleiveryapp-b2d8a.appspot.com",
    messagingSenderId: "597159345894",
    appId: "1:597159345894:web:054e834cb8749f78c8c527"
  };

  export const app = initializeApp(firebaseConfig)