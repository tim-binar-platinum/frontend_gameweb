import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./page/LandingPage";
import RegisterPage from "./page/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<RegisterPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
