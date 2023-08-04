import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import LoginErrorPopup from '../Popups/LoginErrorPopup';

const LoginPanel = ({ onToggleCreateAccount }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const navigateTo = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError(null); // Reset the error state when the user starts typing
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError(null); // Reset the error state when the user starts typing
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User login successful, you can now access userCredential.user
        console.log('User logged in:', userCredential.user);
        // Additional code or redirection logic after successful login
        navigateTo('/dashboard');
      })
      .catch((error) => {
        // Handle errors occurred during login
        console.error('Error logging in:', error.message);
        setError(error.message);
        setShowErrorPopup(true);
      });
  };

  const handleCloseErrorPopup = () => {
    setShowErrorPopup(false);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <h2 className="login-logo">Login</h2>
      <form id="login-form" onSubmit={handleLogin}>
        <input
          type="text"
          id="email"
          name="email"
          className="login-input"
          required
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
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
        <p className='no-account' onClick={onToggleCreateAccount}>
          Don't have an account?
        </p>

        {/* Conditionally render the error dialog */}
        {showErrorPopup && <LoginErrorPopup onClose={handleCloseErrorPopup} />}
      </form>
    </div>
  );
};

export default LoginPanel;
