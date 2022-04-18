import React from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <LandingPage />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
