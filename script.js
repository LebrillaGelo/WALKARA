// Import Firebase modules at the top level
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyAxApCdOhgO09fIB8_Qw-NSCLPi72aW1Q8",
    authDomain: "walkara.firebaseapp.com",
    projectId: "walkara",
    storageBucket: "walkara.appspot.com",
    messagingSenderId: "456097891643",
    appId: "1:456097891643:web:99cadac413780ad62de31e",
    measurementId: "G-5T4ZGKW3Q4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded");
    
    // Get DOM elements
    const loginBox = document.getElementById('loginBox');
    const signupBox = document.getElementById('signupBox');
    const showSignupBtn = document.getElementById('showSignup');
    const showLoginLink = document.getElementById('showLogin');
    
    // Toggle between forms
    if (showSignupBtn) {
        showSignupBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (loginBox && signupBox) {
                loginBox.style.display = 'none';
                signupBox.style.display = 'block';
            }
        });
    }
    
    if (showLoginLink) {
        showLoginLink.addEventListener('click', function(e) {
            e.preventDefault();
            if (loginBox && signupBox) {
                signupBox.style.display = 'none';
                loginBox.style.display = 'block';
            }
        });
    }
    
    // Signup function
    const signupBtn = document.getElementById('signupBtn');
    if (signupBtn) {
        signupBtn.addEventListener('click', async function(e) {
            e.preventDefault();
            
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;
            
            try {
                await createUserWithEmailAndPassword(auth, email, password);
                
                alert('Account created successfully!');
                signupBox.style.display = 'none';
                loginBox.style.display = 'block';
                
                // Clear form
                document.getElementById('signupEmail').value = '';
                document.getElementById('signupPassword').value = '';
                document.getElementById('signupUsername').value = '';
                
            } catch (error) {
                console.error("Error signing up:", error);
                alert(error.message);
            }
        });
    }
    
    // Login function
    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn) {
        loginBtn.addEventListener('click', async function(e) {
            e.preventDefault();
            
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            
            try {
                await signInWithEmailAndPassword(auth, email, password);
                alert('Logged in successfully!');
                // Redirect or update UI here
            } catch (error) {
                console.error("Error logging in:", error);
                alert(error.message);
            }
        });
    }
});
