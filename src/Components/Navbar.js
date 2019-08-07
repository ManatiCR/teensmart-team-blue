import React from 'react';
import '../index.css';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-inverse navbar-expand-xs">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#">About Teensmart</a></li>
              <li><a href="#">Volunteer</a></li>
              <li><a href="#">Get Involved</a></li>
              <li><a href="#">Our Work</a></li>
              <li><a href="#">News</a></li>
            </ul>
          </div>
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
        </div>
        <div className="nav navbar-nav navbar-right">
          <button type="submit" className="btn btn-default donate">Donate Now ></button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;