import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import GamePage from "../components/Game/index";
import Login from "../pages/Login";
import Register from "../pages/Register";
import LandingPage from "../pages/LandingPage";
import Gallery from "../pages/Gallery";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/game-suit",
    element: <GamePage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/landing",
    element: <LandingPage />,
  },
  {
    path: "/game-list",
    element: <Gallery />,
  },
]);

export default Router;
