import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function LoginPage() {
  const navigateTo = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false); // Add the error state

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setError(false); // Reset the error state when the user starts typing
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError(false); // Reset the error state when the user starts typing
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'Testing123' && password === 'Testing123') {
      // Redirect to the dashboard page on successful login
      navigateTo('/dashboard');
    } else {
      // Set the error state to true if login is unsuccessful
      setError(true);
    }
  };

  return (
    <div>
      <header>
        <div className="title-container">
          <h1>OffTheGrid</h1>
        </div>
      </header>
      <main className="login-main">
        <div className="login-container">
          <h2 className="login-logo">Login</h2>
          <form id="login-form" onSubmit={handleLogin}>
            <input
              type="text"
              id="username"
              name="username"
              className="login-input"
              required
              value={username}
              onInput={handleUsernameChange}
              placeholder="Username"
            />

            <input
              type="password"
              id="password"
              name="password"
              className="login-input"
              required
              value={password}
              onInput={handlePasswordChange}
              placeholder="Password"
            />

            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>

        {/* Conditionally render the dialog */}
        {error && (
          <div className="error-dialog">
            <p>Incorrect username or password. Please try again.</p>
          </div>
        )}
      </main>
      <footer>
        <p>Copyright © 2023 OffTheGrid</p>
      </footer>
    </div>
  );
}

export default LoginPage;
