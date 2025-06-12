import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Configuration from './components/Configuration';
import Login from './components/Login';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) {
    return <Login onSuccess={() => setLoggedIn(true)} />;
  }

  return (
    <div className="app-container">
      <Sidebar />
      <main className="content">
        <h1>Bienvenido al Dashboard</h1>
        <Configuration />
      </main>
    </div>
  );
}

export default App;
