
const firebaseConfig = {
  apiKey: "AIzaSyDskzHHR6K7BibACL2Co5HfblCZAFbc284",
  authDomain: "login-signup-524bd.firebaseapp.com",
  projectId: "login-signup-524bd",
  storageBucket: "login-signup-524bd.appspot.com",
  messagingSenderId: "393867488719",
  appId: "1:393867488719:web:58c20a91c270f0371e76ba"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);



function signUp(){
    var email = document.getElementById("email")
    var password = document.getElementById("password")
    
    
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
};


function logIn(){

    var email = document.getElementById("email")
    var password = document.getElementById("password")


    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
  });
};

function forgetPassword(){
    var email = document.getElementById("email")

    firebase.auth().sendPasswordResetEmail(email.value)
    .then(() => {
      // Password reset email sent!
      // ..
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
}


function loginWihGoogle(){
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // IdP data available in result.additionalUserInfo.profile.
      console.log(user);
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}