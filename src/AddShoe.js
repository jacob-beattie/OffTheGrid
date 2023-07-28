import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoeContext } from './ShoeContext';
import ShoeAddedPopup from './ShoeAddedPopup';

const AddShoe = () => {
  const [selectedShoe, setSelectedShoe] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  // List of shoes available in the dropdown with their respective data
  const shoeOptions = [
    { name: 'Shoe 1', price: '$100', releaseDate: '2023-07-25', image: 'path/to/shoe-image-1.jpg' },
    { name: 'Shoe 2', price: '$120', releaseDate: '2023-08-15', image: 'path/to/shoe-image-2.jpg' },
    { name: 'Shoe 3', price: '$90', releaseDate: '2023-09-01', image: 'path/to/shoe-image-3.jpg' },
    { name: 'Shoe 4', price: '$80', releaseDate: '2023-09-15', image: 'path/to/shoe-image-4.jpg' },
  ];

  // Get the dispatch function from the ShoeContext
  const { dispatch } = useContext(ShoeContext);

  // Function to handle the selection of a shoe
  const handleShoeSelection = (event) => {
    setSelectedShoe(event.target.value);
  };

  // Function to handle adding the selected shoe to the dashboard
  const handleAddShoeToDashboard = () => {
    // Check if a shoe is selected
    if (selectedShoe) {
      // Find the selected shoe object from the shoeOptions array
      const selectedShoeObject = shoeOptions.find((shoe) => shoe.name === selectedShoe);

      if (selectedShoeObject) {
        // Dispatch the action to add the selected shoe object to the context state
        dispatch({ type: 'ADD_SHOE', payload: selectedShoeObject });
        setShowPopup(true); // Show the pop-up on successful addition
      }
    }
  };

  // Function to close the pop-up
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <header>
        <div className="title-container">
          <h1>SHOE COLLECTION</h1>
        </div>
        <nav className="nav-links-container">
          <Link to="/dashboard" className="add-shoe-button">
            Home
          </Link>
          <Link to="/" id="logout-button">
            Log Out
          </Link>
        </nav>
      </header>
      <main className="add-shoe-main">
        <div className="add-shoe-container">
          <h2>Add Shoe</h2>
          {/* Dropdown to select a shoe */}
          <select value={selectedShoe} onChange={handleShoeSelection}>
            <option value="">Select a shoe</option>
            {shoeOptions.map((shoe, index) => (
              <option key={index} value={shoe.name}> {/* Use shoe.name as the value */}
                {shoe.name}
              </option>
            ))}
          </select>
          {/* Button to add the selected shoe to the dashboard */}
          <button onClick={handleAddShoeToDashboard}>Add to Dashboard</button>

          {/* Conditionally render the pop-up based on showPopup state */}
          {showPopup && <ShoeAddedPopup onClose={closePopup} />}
        </div>
      </main>
      <footer>
        <p>Copyright © 2023 Shoe Collection</p>
      </footer>
    </div>
  );
};

export default AddShoe;