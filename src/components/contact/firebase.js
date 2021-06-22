import firebase from 'firebase'


var firebaseApp = firebase.initializeApp({
    
        apiKey: "AIzaSyBE4DPvd2KmcdJ_hUJZJKFd3f5c-CGJNjU",
        authDomain: "portfolio-data-1975c.firebaseapp.com",
        projectId: "portfolio-data-1975c",
        storageBucket: "portfolio-data-1975c.appspot.com",
        messagingSenderId: "657683397325",
        appId: "1:657683397325:web:e4520e2ca55067dfc54784"
      
      
})

var db=firebaseApp.firestore();

export {db};