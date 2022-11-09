import React, { useState } from "react";
import Header from "./Header";
import Play from "./Play";
import Game from "./Game";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";

function GamePage() {
  const [myChoice, setMyChoice] = useState("");
  const [score, setScore] = useState(0);

  return (
    <>
      <div className="container">
        <Header score={score} />
        <Routes>
          <Route
            path="/game-suit"
            element={<Play setMyChoice={setMyChoice} />}
          />
          <Route
            path="/game-play"
            element={
              <Game myChoice={myChoice} score={score} setScore={setScore} />
            }
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default GamePage;
