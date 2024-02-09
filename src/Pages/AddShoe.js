import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoeContext } from '../Components/ShoeContext';
import ShoeAddedPopup from '../Popups/ShoeAddedPopup';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const AddShoe = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [alreadyAdded, setAlreadyAdded] = useState(false);
  const [shoeOptions, setShoeOptions] = useState([]); // Store the shoe data in state

  // Get the dispatch function from the ShoeContext
  const { state, dispatch } = useContext(ShoeContext);

  // Initialize Firestore instance
  const db = getFirestore();

  useEffect(() => {
    // Fetch the shoe data from Firestore
    const fetchShoes = async () => {
      const shoesCollection = collection(db, 'Shoes');
      const snapshot = await getDocs(shoesCollection);
      const shoeData = snapshot.docs.map((doc) => doc.data());
      console.log(shoeData);
      setShoeOptions(shoeData);
    };

    fetchShoes();
  }, [db]); // Dependency array to run the effect when db changes

  // Function to handle adding the selected shoe to the dashboard
  const handleAddShoeToDashboard = (selectedShoe) => {
    // Check if the selected shoe is already on the dashboard
    const isAlreadyAdded = state.shoes.some((shoe) => shoe.name === selectedShoe);
    if (isAlreadyAdded) {
      setAlreadyAdded(true);
    } else {
      const selectedShoeObject = shoeOptions.find((shoe) => shoe.name === selectedShoe);
      if (selectedShoeObject) {
        dispatch({ type: 'ADD_SHOE', payload: selectedShoeObject });
        setAlreadyAdded(false);
      }
    }
    setShowPopup(true); // Show the pop-up for successful addition or already added message
  };

  // Function to close the pop-up
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <header>
        <div className="logo-container">
          <img src="/OFFTHEGRID.png" alt="OffTheGrid Logo" className="logo-image" />
        </div>
        <nav className="nav-links-container">
          <Link to="/importshoe" className="add-shoe-button">
            Import Shoe
          </Link>
          <Link to="/dashboard" className="add-shoe-button">
            Home
          </Link>
          <Link to="/" id="logout-button">
            Log Out
          </Link>
        </nav>
      </header>
      <main className="dashboard-main">
        <h2 className="shoe-collection-heading">Select a Shoe to Add</h2>
        {shoeOptions.length > 0 ? (
          <div className="shoe-panel-container">
            {shoeOptions.map((shoe, index) => (
              <div key={index} className="shoe-panel">
                <h3 className="shoe-name">{shoe.name}</h3>
                <img src={shoe.image} alt={shoe.name} />

                {/* Separate elements for titles and values */}
                <p><span className="shoe-title">Price:</span> {shoe.price}</p>
                <p><span className="shoe-title">Release Date:</span> {shoe.releaseDate}</p>

                {/* Add button with dynamically selected shoe */}
                <div className="add-button-container">
                  <button onClick={() => handleAddShoeToDashboard(shoe.name)}>Add to Dashboard</button>
                </div>

                {/* Popup for confirmation */}
                {showPopup && (
                  <ShoeAddedPopup
                    onClose={closePopup}
                    alreadyAdded={alreadyAdded}
                    selectedShoe={shoe.name}
                  />
                )}
              </div>
            ))}
          </div>
        ) : (
          <p>No shoes available to add.</p>
        )}
      </main>
      <footer>
        <p>Copyright © 2023 OffTheGrid</p>
      </footer>
    </div>
  );
};

export default AddShoe;
