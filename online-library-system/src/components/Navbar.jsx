/* import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const activeStyle = {
    fontWeight: 'bold',
    textDecoration: 'underline',
  };

  return (
    <nav style={{ padding: '10px', borderBottom: '1px solid #ccc', marginBottom: '20px' }}>
      <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Home</NavLink> |{' '}
      <NavLink to="/books" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Browse Books</NavLink> |{' '}
      <NavLink to="/add-book" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Add Book</NavLink>
    </nav>
  );
};

export default NavBar;
 */

import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">📚 Online Library</div>
      <div className="navbar-links">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/books" className="nav-link">Browse Books</NavLink>
        <NavLink to="/add-book" className="nav-link">Add Book</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
