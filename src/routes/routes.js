import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import GamePage from "../components/Game/index";
import Play from "../components/Game/Play";

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
]);

export default Router;
