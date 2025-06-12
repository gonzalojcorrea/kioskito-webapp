import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li>Inventario</li>
          <li>Ventas</li>
          <li>Concesiones</li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
