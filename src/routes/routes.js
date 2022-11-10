import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import GamePage from "../components/Game/index";
import Login from "../page/Login";
import Register from "../page/Register";
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
