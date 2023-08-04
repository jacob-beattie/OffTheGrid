import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import CreateAccount from './CreateAccount';

function LoginPage() {
  const navigateTo = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [showCreateAccount, setShowCreateAccount] = useState(false);

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

  const handleToggleCreateAccount = () => {
    setShowCreateAccount(!showCreateAccount);
  };

  const handleToggleLogin = () => {
    setShowCreateAccount(!showCreateAccount);
  };

  return (
    <div>
      <header>
        <div className="title-container">
          <h1>OffTheGrid</h1>
        </div>
      </header>
      <main className="login-main">
        {showCreateAccount ? (
          // Render the create account box
          <CreateAccount onToggleLogin={handleToggleLogin} />
        ) : (
          // Render the login panel
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
              <p className='no-account' onClick={handleToggleCreateAccount}>
                Don't have an account?
              </p>
            </form>

            {/* Conditionally render the error dialog */}
            {error && (
              <div className="error-dialog">
                <p>Incorrect username or password. Please try again.</p>
              </div>
            )}
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