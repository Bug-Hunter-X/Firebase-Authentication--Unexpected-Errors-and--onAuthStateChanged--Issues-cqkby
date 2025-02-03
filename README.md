# Firebase Authentication Error Handling Bug

This repository demonstrates a common issue with Firebase Authentication: unexpected errors and unreliable behavior of the `onAuthStateChanged` listener when user credentials are invalid or there's a credential mismatch. The `firebaseBug.js` file shows the problematic code, while `firebaseBugSolution.js` provides a solution.

The bug occurs because the code doesn't handle potential errors or the possibility of users being signed in with different credentials simultaneously.

## How to reproduce:

1. Clone this repository.
2. Set up a Firebase project and initialize it in your application.
3. Run `firebaseBug.js`.
4. Observe the unexpected behavior and lack of proper error handling.

## Solution:

The `firebaseBugSolution.js` file demonstrates improved error handling and provides a more robust way to handle `onAuthStateChanged`.  It includes clear error messages and attempts to resolve credential conflicts.