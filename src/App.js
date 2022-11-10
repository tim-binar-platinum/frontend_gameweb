import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./page/LandingPage";
import Hero from "./pages/Hero";
import Gallery from "./pages/Gallery";
import Service from "./pages/Service";
import Faq from "./pages/Faq";
import Footer from "./pages/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
},
export default App;
