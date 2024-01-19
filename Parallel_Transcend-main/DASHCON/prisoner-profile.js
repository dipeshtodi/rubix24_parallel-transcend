// Import Firebase
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCqTWhstnYIMAWxFKlFmhqV5kXfDsMwm7Q",
    authDomain: "work-vibe.firebaseapp.com",
    projectId: "work-vibe",
    storageBucket: "work-vibe.appspot.com",
    messagingSenderId: "657553447517",
    appId: "1:657553447517:web:b31d13b5e033c32d7a8bb4",
    measurementId: "G-HEN3V080PD",
    databaseURL: "https://work-vibe-default-rtdb.firebaseio.com/"
};

const app = await initializeApp(firebaseConfig);

// Get references to Firebase services
const auth = getAuth(app);
const database = getDatabase(app);

document.getElementById('prisoner-profile-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;

    // Use Firebase Authentication to create a user account
    createUserWithEmailAndPassword(auth, username, password)
        .then((userCredential) => {
            // User successfully created
            const user = userCredential.user;

            // Store additional prisoner data in Firebase Realtime Database
            const prisonerData = {
                name: name,
                dob: dob
            };

            // Reference to the prisoner's data using the user's UID
            const prisonerRef = ref(database, 'prisoners/' + user.uid);

            // Set the prisoner's data in the database
            set(prisonerRef, prisonerData)
                .then(() => {
                    alert('Prisoner profile created successfully.');
                })
                .catch((error) => {
                    alert('Error storing prisoner data: ' + error.message);
                });
        })
        .catch((error) => {
            alert(`Error: ${error.code} - ${error.message}`);
        });
});
