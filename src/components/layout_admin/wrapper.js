import React from 'react';
import { NavLink } from 'react-router-dom';

const Wrapper = () => {
  return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      {/* Sidebar - Brand */}
      <li className="sidebar-brand d-flex align-items-center justify-content-center">
        <div className="sidebar-brand-icon">
          <i className="fas fa-burger-soda" aria-hidden="true" />
        </div>
        <div className="sidebar-brand-text mx-3">Final Project<sup /></div>
      </li>

      {/* Divider */}
      <hr className="sidebar-divider my-0" />

      {/* Nav Item - Dashboard */}
      <li className="nav-item">
        <NavLink to="/dashboard" className="nav-link">
          <i className="fas fa-fw fa-tachometer-alt" />
          <span>Dashboard</span>
        </NavLink>
      </li>

      {/* Divider */}
      <hr className="sidebar-divider" />

      {/* Heading */}
      <div className="sidebar-heading">Interface</div>

      {/* Nav Item - Pages Collapse Menu */}
      <li className="nav-item">
        <NavLink to="/product-list" className="nav-link">
          <i className="fas fa-coffee" />
          <span>Products List</span>
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink to="/contact-list" className="nav-link">
          <i className="fas fa-comments" />
          <span>Contacts List</span>
        </NavLink>
      </li>

      {/* Nav Item - Utilities Collapse Menu */}
      <li className="nav-item">
        <NavLink to="/" className="nav-link">
          <i className="fas fa-shipping-fast" />
          <span>Go to Pages</span>
        </NavLink>
      </li>
    </ul>
  );
};

export default Wrapper;
