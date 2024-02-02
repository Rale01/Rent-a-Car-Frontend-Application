import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link nav-brand">Wheels On Rent</Link>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/cars" className="nav-link">Our cars</Link>
        <Link to="/agents" className="nav-link">Our rental agents</Link>
      </div>
    </nav>
  );
};

export default Navbar;
