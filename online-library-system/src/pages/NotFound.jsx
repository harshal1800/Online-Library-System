import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div style={{ padding: '20px' }}>
    <h2>404 - Page Not Found</h2>
    <p>Oops! The page you are looking for does not exist.</p>
    <Link to="/">Go back to Home</Link>
  </div>
);

export default NotFound;
