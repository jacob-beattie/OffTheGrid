// ShoeRemovePopup.js

import React from 'react';

const ShoeRemovePopup = ({ onClose, onConfirm, shoeName }) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <div className="popup-content">
          <h3>Remove Shoe</h3>
          <p>{`Are you sure you want to remove the shoe "${shoeName}"?`}</p>
          <div className="button-container">
            <button className="confirm-button" onClick={onConfirm}>
              Yes
            </button>
            <button className="cancel-button" onClick={onClose}>
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoeRemovePopup;