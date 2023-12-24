import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

// Import the popup components
import AccountCreatedPopup from '../Popups/AccountCreatedPopup';
import AccountExistsPopup from '../Popups/AccountExistsPopup';

const CreateAccount = ({ onToggleLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    repeatPassword: '',
  });

  // State variables to track popup visibility
  const [isAccountCreated, setIsAccountCreated] = useState(false);
  const [isAccountExists, setIsAccountExists] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, repeatPassword } = formData;

    if (password !== repeatPassword) {
      alert("Passwords don't match");
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User account creation successful, you can now access userCredential.user
        console.log('User account created:', userCredential.user);
        setIsAccountCreated(true); // Show the "Account Created" popup
      })
      .catch((error) => {
        // Handle errors occurred during account creation
        console.error('Error creating account:', error.message);
        setIsAccountExists(true); // Show the "Account Exists" popup
      });
  };

  const handleClosePopups = () => {
    // Reset the popup visibility when the close button is clicked
    setIsAccountCreated(false);
    setIsAccountExists(false);

    setFormData({
      email: '',
      password: '',
      repeatPassword: '',
    });
  };

  return (
    <div className="login-container">
      <h2 className="login-logo">Create Account</h2>
      <form id="login-form" onSubmit={handleSubmit}>
      <input
          type="email"
          id="email"
          name="email"
          className="login-input"
          required
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          id="password"
          name="password"
          className="login-input"
          required
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <input
          type="password"
          id="repeat-password"
          name="repeatPassword"
          className="login-input"
          required
          placeholder="Repeat Password"
          value={formData.repeatPassword}
          onChange={handleChange}
        />

        <button type="submit" className="login-button">
          Create Account
        </button>
        <p className='no-account' onClick={onToggleLogin}>
          Already have an account?
        </p>

        {/* Conditionally render the popups based on the state */}
        {isAccountCreated && (
          <AccountCreatedPopup onClose={handleClosePopups} />
        )}
        {isAccountExists && (
          <AccountExistsPopup onClose={handleClosePopups} />
        )}
      </form>
    </div>
  );
};

export default CreateAccount;