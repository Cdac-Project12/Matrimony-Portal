import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css'; 

const Sidebar = () => {
  const messageCount = 3; 

  return (
    <div className="sidebar d-flex flex-column bg-dark text-light p-4 shadow">
      <h3 className="text-center text-white mb-4">💍 Matrimony</h3>
      <ul className="list-unstyled">
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `nav-link d-flex align-items-center ${isActive ? 'active' : ''}`
            }
          >
            <i className="fa fa-home me-3 sidebar-icon"></i> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/matches"
            className={({ isActive }) =>
              `nav-link d-flex align-items-center ${isActive ? 'active' : ''}`
            }
          >
            <i className="fa fa-heart me-3 sidebar-icon text-danger"></i> Matches
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/message"
            className={({ isActive }) =>
              `nav-link d-flex align-items-center ${isActive ? 'active' : ''}`
            }
          >
            <i className="fa fa-envelope me-3 sidebar-icon text-info"></i> Messages
            {messageCount > 0 && (
              <span className="badge bg-danger ms-2">{messageCount}</span>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `nav-link d-flex align-items-center ${isActive ? 'active' : ''}`
            }
          >
            <i className="fa fa-user me-3 sidebar-icon text-primary"></i> Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `nav-link d-flex align-items-center ${isActive ? 'active' : ''}`
            }
          >
            <i className="fa fa-cog me-3 sidebar-icon text-success"></i> Settings
          </NavLink>
        </li>
        <li className="mt-4">
          <NavLink
            to="/login"
            className="nav-link text-danger d-flex align-items-center"
          >
            <i className="fa fa-sign-out me-3 sidebar-icon"></i> Logout
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
