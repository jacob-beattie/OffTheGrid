document.addEventListener('DOMContentLoaded', function() {
    // Select the login form and add an event listener for form submission
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Retrieve the entered username and password from the form fields
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      // Set the correct username and password
      const correctUsername = 'beattij1';
      const correctPassword = 'Testing123';
  
      // Check if the entered username and password match the correct values
      if (username === correctUsername && password === correctPassword) {
        // Redirect to index.html
        window.location.href = 'index.html';
      } else {
        alert('Invalid username or password. Please try again.');
      }
    });
  });