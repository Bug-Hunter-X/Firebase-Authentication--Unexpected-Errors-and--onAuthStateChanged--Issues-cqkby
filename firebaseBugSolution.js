// firebaseBugSolution.js
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log("User is signed in:", uid);
  } else {
    // User is signed out
    // Attempt to sign in with provided credentials.  Handles errors gracefully.
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("Signed in with email:", user.email);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Sign-in error:", errorCode, errorMessage);
        // Handle specific errors (e.g., wrong password, user not found)
      });
  }
});