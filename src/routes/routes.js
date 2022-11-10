import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import GamePage from "../components/Game/index";
import Play from "../components/Game/Play";
import Login from "../page/Login";
import Register from "../page/RegisterPage";
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
