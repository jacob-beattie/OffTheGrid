import React from "react";

const ShoeExistsPopup = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <div className="popup-content">
          <div>
            <h3>Shoe Already Imported</h3>
            <p>This shoe already has been imported. Please try again.</p>
          </div>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default ShoeExistsPopup;
