   // Your Firebase configuration
   const firebaseConfig = {
    apiKey: "AIzaSyCqTWhstnYIMAWxFKlFmhqV5kXfDsMwm7Q",
    authDomain: "work-vibe.firebaseapp.com",
    projectId: "work-vibe",
    storageBucket: "work-vibe.appspot.com",
    messagingSenderId: "657553447517",
    appId: "1:657553447517:web:b31d13b5e033c32d7a8bb4",
    measurementId: "G-HEN3V080PD",
    databaseURL: "https://work-vibe-default-rtdb.firebaseio.com/" // Add your Firebase Realtime Database URL here
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference your database
const contactFormDB = firebase.database().ref("contactForm");

// Function to submit the form
function submitForm(e) {
    e.preventDefault();
    console.log("submitted");
    const name = getElementVal("name");
    const emailid = getElementVal("emailid");
    const msgContent = getElementVal("msgContent");

    saveMessages(name, emailid, msgContent);

    // Enable alert
    document.querySelector(".alert").style.display = "block";

    // Remove the alert after 3 seconds
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    // Reset the form
    document.getElementById("contactForm").reset();
}

// Function to save messages to the database
const saveMessages = (name, emailid, msgContent) => {
    const newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        emailid: emailid,
        msgContent: msgContent,
    });
};

// Function to get element value by id
const getElementVal = (id) => {
    return document.getElementById(id).value;
};

// Event listener for form submission
document.getElementById("contactForm").addEventListener("submit", submitForm);