import React, { useState } from 'react';
import '../Components/App';
import CreateAccountPanel from '../Components/CreateAccountPanel';
import LoginPanel from '../Components/LoginPanel';

function LoginPage() {
  const [showCreateAccount, setShowCreateAccount] = useState(false);

  const handleToggleCreateAccount = () => {
    setShowCreateAccount(!showCreateAccount);
  };

  return (
    <div>
      <header>
        <div className="title-container">
          <h1>OffTheGrid</h1>
        </div>
      </header>
      <main className="login-main">
        {showCreateAccount ? (
          // Render the create account box
          <CreateAccountPanel onToggleLogin={handleToggleCreateAccount} />
        ) : (
          // Render the login panel
          <LoginPanel onToggleCreateAccount={handleToggleCreateAccount} />
        )}
      </main>
      <footer>
        <p>Copyright © 2023 OffTheGrid</p>
      </footer>
    </div>
  );
}

export default LoginPage;