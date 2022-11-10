import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import GamePage from "../components/Game/index";
import Play from "../components/Game/Play";
import Login from "../page/Login";
import Register from "../page/RegisterPage";
import LandingPage from "../page/LandingPage";

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
    path: "/game-play",
    element: <Play />,
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
]);

export default Router;
