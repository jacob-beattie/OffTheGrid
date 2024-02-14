import React from "react";

const AccountCreatedPopup = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <div className="popup-content">
          <div>
            <h3>Account Successfully Created</h3>
            <p>Your account has been created successfully!</p>
          </div>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default AccountCreatedPopup;
