<<<<<<< HEAD
import React from "react";
import Hero from "./pages/Hero";
import Gallery from "./pages/Gallery";
import Service from "./pages/Service";
import Faq from "./pages/Faq";
import Footer from "./pages/Footer";

function App() {
  return (
    <div>
      <Hero /> &nbsp;
      <Gallery />
      <Service />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
=======
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
>>>>>>> f01b8b31a5f2376dfe59ce27b671a21df868c5b4
