import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/classes">Classes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/scheduler">Scheduler</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  
  export default Navbar;