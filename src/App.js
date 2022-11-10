import React from "react";
import Hero from "./pages/Hero";
import Service from "./pages/Service";
import Faq from "./pages/Faq";
import Footer from "./pages/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero /> &nbsp;
      <Service />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
