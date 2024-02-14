import React from "react";

const LoginErrorPopup = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <div className="popup-content">
          <h3>Login Error</h3>
          <p>Incorrect username or password. Please try again.</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default LoginErrorPopup;
