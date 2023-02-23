import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../../../src/index.css";
import {TiShoppingCart} from 'react-icons/ti'

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to='/' className="navbar-brand text-white">
            <TiShoppingCart style={{marginTop: '-3px'}}/> SNITCH
          </Link>
        
          <button
            className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="toggler-icon top-bar" />
            <span className="toggler-icon middle-bar" />
            <span className="toggler-icon bottom-bar" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav ms-auto text-center mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link text-white"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/category" className="nav-link text-white">
                  Category
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/register" className="nav-link text-white">
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link text-white">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link text-white">
                  Cart (0)
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
