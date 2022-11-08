import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/css/main.css";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GamePage from "./components/Game/index";
import Play from "./components/Game/Play";
import "./assets/scss/styles.scss";

AOS.init();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/game-suit",
    element: <GamePage />,
  },
  {
    path: "/game-play",
    element: <Play />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
