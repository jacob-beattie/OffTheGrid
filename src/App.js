import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './DashboardPage';
import AddShoe from './AddShoe';
import { ShoeProvider } from './ShoeContext';
import LoginPage from './LoginPage';

const App = () => {
  return (
    <Router>
      <ShoeProvider>
        <Routes>
          <Route path="/addshoe" element={<AddShoe />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/" element={<LoginPage />} /> {/* Default route */}
        </Routes>
      </ShoeProvider>
    </Router>
  );
};

export default App;




