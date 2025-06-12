import React from 'react';
import Sidebar from './components/Sidebar';
import Configuration from './components/Configuration';
import './App.css';

function App() {
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
