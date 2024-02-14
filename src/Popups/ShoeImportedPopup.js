// ShoeImportedPopup.js

import React from "react";

const ShoeImportedPopup = ({ onClose, alreadyAdded, selectedShoe }) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <div className="popup-content">
          <div>
            <h3>Shoe Imported Successfully</h3>
            <p>
              The shoe "{selectedShoe}" has been added to the list of shoes.
            </p>
          </div>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default ShoeImportedPopup;
