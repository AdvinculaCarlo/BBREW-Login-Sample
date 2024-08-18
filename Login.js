document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Perform a simple validation
    if (username === 'bbrewmngr1' && password === 'bbrew1manager') {
        alert('Login successful!');
        // Redirect to a new page or perform any other action here
    } else {
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.textContent = 'Invalid username or password';
        errorMessage.style.display = 'block';
    }
});
