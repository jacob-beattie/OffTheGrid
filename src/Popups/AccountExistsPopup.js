import React from "react";

const AccountExistsPopup = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <div className="popup-content">
          <div>
            <h3>Account Already Exists</h3>
            <p>
              An account with this email already exists. Please try logging in.
            </p>
          </div>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default AccountExistsPopup;
