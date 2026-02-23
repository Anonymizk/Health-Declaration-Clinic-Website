// login.js

// Get accounts from localStorage (same source as admin)
function getAccounts() {
    const storedAccounts = localStorage.getItem('accounts');
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

    // Get accounts from localStorage
    const accounts = getAccounts();

    // Find matching account
    const user = accounts.find(acc => acc.gmail === gmail && acc.password === password);

    if (user) {
        errorDiv.textContent = "";

        localStorage.setItem('loggedInUser', JSON.stringify(user));

        window.location.href = 'FirstBranch.html';
    } else {
        errorDiv.textContent = "Invalid username or password.";
    }
});