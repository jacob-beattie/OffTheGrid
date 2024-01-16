import { Link } from 'react-router-dom';

const ImportShoePage = () => {

return (
    <div>
        <header>
            <div className="logo-container">
                <img src="/OFFTHEGRID.png" alt="OffTheGrid Logo" className="logo-image" />
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
            <h2>Import Shoe Page</h2>
        </main>
        <footer>
            <p>Copyright © 2023 OffTheGrid</p>
        </footer>
    </div>
);
};

export default ImportShoePage;

