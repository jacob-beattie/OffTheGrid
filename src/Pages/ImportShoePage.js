import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import ShoeImportedPopup from "../Popups/ShoeImportedPopup";
import ShoeExistsPopup from "../Popups/ShoeExistsPopup";

const ImportShoePage = () => {
  const [shoeName, setShoeName] = useState("");
  const [shoePrice, setShoePrice] = useState("");
  const [shoeReleaseDate, setShoeReleaseDate] = useState("");
  const [showImportedPopup, setShowImportedPopup] = useState(false);
  const [showExistsPopup, setShowExistsPopup] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Check if a shoe with the same name already exists
    const db = getFirestore();
    const shoesCollection = collection(db, "Shoes");
    const querySnapshot = await getDocs(
      query(shoesCollection, where("name", "==", shoeName))
    );

    if (querySnapshot.size > 0) {
      // A shoe with the same name already exists, show the ShoeExistsPopup
      setShowExistsPopup(true);
    } else {
      // Create a new shoe object
      const newShoe = {
        name: shoeName,
        price: shoePrice,
        releaseDate: shoeReleaseDate,
      };

      // Add the new shoe to the database
      try {
        await addDoc(shoesCollection, newShoe);

        // Set showImportedPopup to true to display the success popup
        setShowImportedPopup(true);
      } catch (error) {
        console.error("Error adding shoe to the database:", error.message);
      }
    }
  };

  // Function to close the ShoeImportedPopup
  const closeImportedPopup = () => {
    setShowImportedPopup(false);
  };

  // Function to close the ShoeExistsPopup
  const closeExistsPopup = () => {
    setShowExistsPopup(false);
  };

  return (
    <div>
      <header>
        <div className="logo-container">
          <img
            src="/OFFTHEGRID.png"
            alt="OffTheGrid Logo"
            className="logo-image"
          />
        </div>
        <nav className="nav-links-container">
          <Link to="/addshoe" className="add-shoe-button">
            Add Shoe
          </Link>
          <Link to="/dashboard" className="add-shoe-button">
            Home
          </Link>
          <Link to="/" id="logout-button">
            Log Out
          </Link>
        </nav>
      </header>
      <main className="add-shoe-main">
        <div className="import-shoe-container">
          <h2>Import Shoe</h2>
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="shoeName">Shoe Name:</label>
            <input
              type="text"
              id="shoeName"
              value={shoeName}
              onChange={(e) => setShoeName(e.target.value)}
              required
            />

            <label htmlFor="shoePrice">Shoe Price:</label>
            <input
              type="text"
              id="shoePrice"
              value={shoePrice}
              onChange={(e) => setShoePrice(e.target.value)}
              required
            />

            <label htmlFor="shoeReleaseDate">Release Date:</label>
            <input
              type="date"
              id="shoeReleaseDate"
              value={shoeReleaseDate}
              onChange={(e) => setShoeReleaseDate(e.target.value)}
              required
            />

            <button type="submit">Confirm</button>
          </form>
        </div>
      </main>

      {/* Conditionally render the ShoeImportedPopup based on showImportedPopup state */}
      {showImportedPopup && (
        <ShoeImportedPopup
          onClose={closeImportedPopup}
          selectedShoe={shoeName}
        />
      )}

      {/* Conditionally render the ShoeExistsPopup based on showExistsPopup state */}
      {showExistsPopup && <ShoeExistsPopup onClose={closeExistsPopup} />}

      <footer>
        <p>Copyright © 2023 OffTheGrid</p>
      </footer>
    </div>
  );
};

export default ImportShoePage;
