import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from '../Pages/DashboardPage';
import AddShoe from '../Pages/AddShoe';
import ImportShoePage from '../Pages/ImportShoePage';
import { ShoeProvider } from '../Components/ShoeContext';
import LoginPage from '../Pages/LoginPage';
import { app } from './firebase';

const App = () => {
  return (
    <Router>
      <ShoeProvider>
        <Routes>
          <Route path="/addshoe" element={<AddShoe />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/importshoe" element={<ImportShoePage />} />
          <Route path="/" element={<LoginPage />} /> {/* Default route */}
        </Routes>
      </ShoeProvider>
    </Router>
  );
};

export default App;