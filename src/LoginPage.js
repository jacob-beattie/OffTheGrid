import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function LoginPage() {
  const navigateTo = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Your login validation logic goes here
    // For simplicity, we'll assume login is successful if username and password are non-empty
    if (username && password) {
      // Redirect to the dashboard page on successful login
      navigateTo('/dashboard');
    }
  };

  return (
    <div>
      <header>
        <div className="title-container">
          <h1>SHOE COLLECTION</h1>
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
              onChange={handleUsernameChange}
              placeholder="Username"
            />

            <input
              type="password"
              id="password"
              name="password"
              className="login-input"
              required
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
            />

            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      </main>
      <footer>
        <p>Copyright © 2023 Shoe Collection</p>
      </footer>
    </div>
  );
}

export default LoginPage;
