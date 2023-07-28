import React from 'react';

const ShoeAddedPopup = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <div className="popup-content">
          <h3>Shoe Added Successfully</h3>
          <p>Your selected shoe has been added to the dashboard.</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default ShoeAddedPopup;
