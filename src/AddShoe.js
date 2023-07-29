import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoeContext } from './ShoeContext';
import ShoeAddedPopup from './ShoeAddedPopup';

const AddShoe = () => {
  const [selectedShoe, setSelectedShoe] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [alreadyAdded, setAlreadyAdded] = useState(false);
  

  // List of shoes available in the dropdown with their respective data
  const shoeOptions = [
    { name: 'Nike Air Jordan 1 Low Shadow 3.0', price: '$380', releaseDate: 'July 2021', image: 'path/to/shoe-image-1.jpg' },
    { name: 'Adidas Yeezy 350 V2 Citrin', price: '$380', releaseDate: 'September 2020', image: 'path/to/shoe-image-2.jpg' },
    { name: 'Nike Air VaporMax Flyknit 3', price: '$310', releaseDate: 'March 2021', image: 'path/to/shoe-image-3.jpg' },
    { name: 'Adidas NMD R1 Japan Triple White', price: '$280', releaseDate: 'August 2017', image: 'path/to/shoe-image-4.jpg' },
  ];

  // Get the dispatch function from the ShoeContext
  const { state, dispatch } = useContext(ShoeContext);

  // Function to handle the selection of a shoe
  const handleShoeSelection = (event) => {
    setSelectedShoe(event.target.value);
  };

  // Function to handle adding the selected shoe to the dashboard
  const handleAddShoeToDashboard = () => {
    // Check if a shoe is selected
    if (selectedShoe) {
      // Check if the selected shoe is already on the dashboard
      const isAlreadyAdded = state.shoes.some((shoe) => shoe.name === selectedShoe);
      if (isAlreadyAdded) {
        setAlreadyAdded(true); // Set the alreadyAdded state to true if the shoe is already added
        setShowPopup(true); // Show the pop-up
      } else {
        const selectedShoeObject = shoeOptions.find((shoe) => shoe.name === selectedShoe);
        if (selectedShoeObject) {
          dispatch({ type: 'ADD_SHOE', payload: selectedShoeObject });
          setShowPopup(true); // Show the pop-up for successful addition
          setAlreadyAdded(false); // Reset the alreadyAdded state
        }
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
          {showPopup && (
            <ShoeAddedPopup
              onClose={closePopup}
              alreadyAdded={alreadyAdded}
              selectedShoe={selectedShoe}
            />
          )}
        </div>
      </main>
      <footer>
        <p>Copyright © 2023 Shoe Collection</p>
      </footer>
    </div>
  );
};

export default AddShoe;