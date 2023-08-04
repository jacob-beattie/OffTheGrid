import React from 'react';

const CreateAccount = ({ onToggleLogin }) => {
  return (
    <div className="login-container">
      <h2 className="login-logo">Create Account</h2>
      <form id="login-form">
        <input
          type="text"
          id="username"
          name="username"
          className="login-input"
          required
          placeholder="Username"
        />

        <input
          type="email"
          id="email"
          name="email"
          className="login-input"
          required
          placeholder="Email"
        />

        <input
          type="password"
          id="password"
          name="password"
          className="login-input"
          required
          placeholder="Password"
        />

        <input
          type="password"
          id="repeat-password"
          name="repeat-password"
          className="login-input"
          required
          placeholder="Repeat Password"
        />

        <button type="submit" className="login-button">
          Create Account
        </button>
        <p className='no-account' onClick={onToggleLogin}>
          Already have an account?
        </p>
      </form>
    </div>
  );
};

export default CreateAccount;

