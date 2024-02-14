// ShoeAddedPopup.js

import React from "react";

const ShoeAddedPopup = ({ onClose, alreadyAdded, selectedShoe }) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <div className="popup-content">
          {alreadyAdded ? (
            <div>
              <h3>Shoe Already Added</h3>
              <p>The shoe "{selectedShoe}" is already on the dashboard.</p>
            </div>
          ) : (
            <div>
              <h3>Shoe Added Successfully</h3>
              <p>
                Your selected shoe "{selectedShoe}" has been added to the
                dashboard.
              </p>
            </div>
          )}
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default ShoeAddedPopup;
