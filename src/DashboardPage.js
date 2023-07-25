import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoeContext } from './ShoeContext';

const DashboardPage = () => {
  const { state } = useContext(ShoeContext);

  return (
    <div>
      <header>
        <div className="title-container">
          <h1>SHOE COLLECTION</h1>
        </div>
        <nav className="nav-links-container">
          <Link to="/addshoe" className="add-shoe-button">
            Add Shoe
          </Link>
          <Link to="/" id="logout-button">
            Log Out
          </Link>
        </nav>
      </header>
      <main className="login-main">
        {/* Render the selected shoe information */}
        {state.shoes.length > 0 ? (
          <div>
            <h2>Selected Shoes:</h2>
            <ul>
              {state.shoes.map((shoe, index) => (
                <li key={index}>{shoe}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No shoes added to the dashboard yet.</p>
        )}
      </main>
      <footer>
        <p>Copyright © 2023 Shoe Collection</p>
      </footer>
    </div>
  );
};

export default DashboardPage;










