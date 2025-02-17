import React from 'react';
import { Link } from 'react-router-dom';

function navbar() {
  return (
    <div>
        <div className="navbar">
        <Link to="/home"><img src="/bank.png" alt="bankLogo" /></Link>     
        <Link to="/personal">Personal</Link>
        <Link to="/business">Business</Link>
        <Link to="/health">Health</Link>
        <Link to="/locations">Locations</Link>
        <Link to="/about">About</Link>
        <Link to="/education">Education</Link>
        <Link to="/appointment">Appointments</Link>
        <div className="search-container">
          <input type="text" placeholder="Search" />
        </div>
      </div>
    </div>
  );
}

export default navbar;
