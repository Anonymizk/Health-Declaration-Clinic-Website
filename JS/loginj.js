// loginj.js

// CONSTANT KEY: Must match the one in Adminlog.html
const USERS_KEY = 'student_accounts';

// Get users from localStorage (reads from 'student_accounts')
function getAccounts() {
    const storedAccounts = localStorage.getItem(USERS_KEY);
    if (storedAccounts) {
        return JSON.parse(storedAccounts);
    }
    return []; // Return empty if no accounts exist
}

// Login event listener
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const gmail = document.getElementById('gmail').value;
    const password = document.getElementById('password').value;
    const errorDiv = document.getElementById('error');

    // Get accounts from localStorage (Student Accounts only)
    const accounts = getAccounts();

    // Find matching account
    const user = accounts.find(acc => acc.gmail === gmail && acc.password === password);

    if (user) {
        errorDiv.textContent = "";
        
        // Optional: Store session
        localStorage.setItem('loggedInUser', JSON.stringify(user));

        // Redirect to student page
        window.location.href = 'FirstBranch.html';
    } else {
        errorDiv.textContent = "Invalid gmail or password.";
    }
});
