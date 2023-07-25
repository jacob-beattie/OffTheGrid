import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoeContext } from './ShoeContext';

const AddShoe = () => {
    const [selectedShoe, setSelectedShoe] = useState('');

    // List of shoes available in the dropdown
    const shoeOptions = ['Shoe 1', 'Shoe 2', 'Shoe 3', 'Shoe 4'];
  
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
        // Dispatch the action to add the shoe to the context state
        dispatch({ type: 'ADD_SHOE', payload: selectedShoe });
      }
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
                <option key={index} value={shoe}>
                    {shoe}
                </option>
                ))}
            </select>
            {/* Button to add the selected shoe to the dashboard */}
            <button onClick={handleAddShoeToDashboard}>Add to Dashboard</button>
        </div>
      </main>
      <footer>
        <p>Copyright © 2023 Shoe Collection</p>
      </footer>
    </div>
  );
};

export default AddShoe;