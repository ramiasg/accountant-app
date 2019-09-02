import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';

const Navbar = ({click}) => {
  const authLinks = (
    <div className="collapse navbar-collapse justify-content-end">
    <form className="navbar-form">
      <span className="bmd-form-group">
        <div className="input-group no-border">
          <input type="text" value="" className="form-control" placeholder="Search..." />
          <button type="submit" className="btn btn-white btn-round btn-just-icon">
            <i className="material-icons">search</i>
            <div className="ripple-container"></div>
          </button>
        </div>
      </span>
    </form>
    <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" href="#">
        <i className="material-icons">dashboard</i>
        <p className="d-lg-none d-md-block">
          Stats
        </p>
      </a>
    </li>
    <li className="nav-item dropdown">
      <a className="nav-link" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i className="material-icons">notifications</i>
        <span className="notification">5</span>
        <p className="d-lg-none d-md-block">
          Some Actions
        </p>
      </a>
      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
        <a className="dropdown-item" href="#">Mike John responded to your email</a>
        <a className="dropdown-item" href="#">You have 5 new tasks</a>
        <a className="dropdown-item" href="#">You're now friend with Andrew</a>
        <a className="dropdown-item" href="#">Another Notification</a>
        <a className="dropdown-item" href="#">Another One</a>
      </div>
    </li>
    <li className="nav-item dropdown">
      <a className="nav-link" href="#" id="navbarDropdownProfile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i className="material-icons">person</i>
        <p className="d-lg-none d-md-block">
          Account
        </p>
      </a>
      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownProfile">
        <a className="dropdown-item" href="#">Profile</a>
        <a className="dropdown-item" href="#">Settings</a>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href="#">Log out</a>
      </div>
    </li>
  </ul>
  </div>
  );

  const guestLinks = (
    <ul className="navbar-list">
      <li className="navbar-link">
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
        <div className="container-fluid">
          <button className="toggle-button btn-mop" onClick={click}>
          <div className="toggle-button__bar"></div>
          <div className="toggle-button__bar"></div>
          <div className="toggle-button__bar"></div>
        </button>
          <div className="collapse navbar-collapse justify-content-end">
            <form className="navbar-form">
              <span className="bmd-form-group"><div className="input-group no-border">
                <input type="text" value="" className="form-control" placeholder="Search..." />
                <button type="submit" className="btn btn-white btn-round btn-just-icon">
                  <i className="material-icons">search</i>
                  <div className="ripple-container"></div>
                </button>
              </div></span>
            </form>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="material-icons">dashboard</i>
                  <p className="d-lg-none d-md-block">
                    Stats
                  </p>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link" href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="material-icons">notifications</i>
                  <span className="notification">5</span>
                  <p className="d-lg-none d-md-block">
                    Some Actions
                  </p>
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#">Mike John responded to your email</a>
                  <a className="dropdown-item" href="#">You have 5 new tasks</a>
                  <a className="dropdown-item" href="#">You're now friend with Andrew</a>
                  <a className="dropdown-item" href="#">Another Notification</a>
                  <a className="dropdown-item" href="#">Another One</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link" href="#" id="navbarDropdownProfile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="material-icons">person</i>
                  <p className="d-lg-none d-md-block">
                    Account
                  </p>
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownProfile">
                  <a className="dropdown-item" href="#">Account</a>
                  <a className="dropdown-item" href="#">Settings</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Log out</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
  );
};


export default Navbar;