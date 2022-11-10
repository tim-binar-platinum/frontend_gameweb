/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../assets/css/landingpage.css";
import art from "../assets/image/landingpage-art.png";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <div>
      <>
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
                  <Link href="#">BINARGAME</Link>
                </h1>
              </div>
              <div id="menu" className="col-8 text-uppercase pt-2 pl-5 pr-5">
                <ul className="d-lg-flex d-md-block justify-content-between">
                  <Link>about</Link>
                  <Link>game list</Link>
                  <Link to="/login">login</Link>
                  <Link to="/register">register</Link>
                </ul>
              </div>
            </div>
          </div>
        </navbar>
        <aside>
          <div className="container pt-5">
            <div className="row justify-content-between">
              <div className="col col-lg-6 col-md-12">
                <p>
                  THE POPULER GAME WEBSITE IN THE WORLD, EASY TO JOIN AND PLAY
                  GAME FROM YOUR DEVICE
                </p>
                <Link to="/game">
                  <button className="rounded-5">PLAY NOW</button>
                </Link>
              </div>
              <div id="art-game" className="col col-1 col-lg-5">
                <img className="img-fluid pt-5" src={art} alt="" />
              </div>
            </div>
          </div>
        </aside>
      </>
    </div>
  );
};

export default LandingPage;
