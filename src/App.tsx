import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";

import {
  About,
  Achievements,
  Contact,
  Hero,
  Navbar,
  Skills,
  Works,
  StarsCanvas,
  Footer,
} from "./components";

import { config } from "./constants/config";

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        
        {/* Hero Section */}
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Hero />
        </div>

        {/* About */}
        <About />

        {/* Projects */}
        <Works />

        {/* Skills */}
        <Skills />

        {/* Achievements */}
        <Achievements />

        {/* Contact */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;