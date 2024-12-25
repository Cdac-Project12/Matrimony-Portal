import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div>
      <h3 className="mb-4">Matrimony</h3>
      <ul className="list-unstyled">
        <li>
          <Link to="/dashboard" className="nav-link">
            <i className="fa fa-home me-2"></i>Dashboard
          </Link>
        </li>
        <li>
          <Link to="/matches" className="nav-link">
            <i className="fa fa-heart me-2"></i>Matches
          </Link>
        </li>
        <li>
          <Link to="/profile" className="nav-link">
            <i className="fa fa-user me-2"></i>Profile
          </Link>
        </li>
        <li>
          <Link to="/login" className="nav-link text-danger">
            <i className="fa fa-sign-out me-2"></i>Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
