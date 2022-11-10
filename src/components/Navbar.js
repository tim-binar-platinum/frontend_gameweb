import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/landingpage.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <navbar>
        <div className="container pt-3">
          <div className="row">
            <div className="col col-md-12 col-lg-4 d-flex">
              <img
                id="menubar-icon"
                src="menubar.svg"
                alt=""
                className="img-fluid"
              />
              <h1>
                <Link href="#">LOG</Link>
              </h1>
            </div>
            <div id="menu" className="col-8 text-uppercase pt-2 pl-5 pr-5">
              <ul className="d-lg-flex d-md-block justify-content-between">
                <Link to="/about">about</Link>
                <Link to="/game-list">game list</Link>
                <Link to="/login">login</Link>
                <Link to="/register">register</Link>
              </ul>
            </div>
          </div>
        </div>
      </navbar>
    </div>
  );
};

export default Navbar;
