import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./page/LandingPage";
import Login from "./page/Login";
import Register from "./page/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
