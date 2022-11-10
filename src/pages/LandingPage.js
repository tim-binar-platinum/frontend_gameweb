/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../assets/css/landingpage.css";
import art from "../assets/image/landingpage-art.png";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const LandingPage = () => {
  return (
    <div>
      <>
        <Navbar />
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
