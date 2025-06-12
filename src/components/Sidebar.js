import React from 'react';
import '../styles/Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><i className="fas fa-boxes"></i> Inventario</li>
          <li><i className="fas fa-cash-register"></i> Ventas</li>
          <li><i className="fas fa-store"></i> Concesiones</li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
