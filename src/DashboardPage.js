import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoeContext } from './ShoeContext';

const DashboardPage = () => {
  const { state, dispatch } = useContext(ShoeContext);

  const handleRemoveShoe = (shoeName) => {
    dispatch({ type: 'REMOVE_SHOE', payload: shoeName });
  };

  return (
    <div>
      <header>
        <div className="title-container">
          <h1>OffTheGrid</h1>
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
      {state.shoes.length > 0 ? (        
            <div className="shoe-panel-container">
              {state.shoes.map((shoe, index) => (
                <div key={index} className="shoe-panel">
                  <h3 className="shoe-name">{shoe.name}</h3>
                  <img src={shoe.image} alt={shoe.name} />

                  {/* Separate elements for titles and values */}
                  <p><span className="shoe-title">Price:</span> {shoe.price}</p>
                  <p><span className="shoe-title">Release Date:</span> {shoe.releaseDate}</p>

                  {/* Remove button */}
                  <button onClick={() => handleRemoveShoe(shoe.name)}>Remove</button>
                </div>
              ))}
            </div>
        ) : (
          <p>No shoes added to the dashboard yet.</p>
        )}
      </main>
      <footer>
        <p>Copyright © 2023 OffTheGrid</p>
      </footer>
    </div>
  );
};

export default DashboardPage;