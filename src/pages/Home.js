import React from 'react';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import History from '../components/History';
import Sparetime from '../components/Sparetime';

function Home() {
  return (
  <div>
    <Hero />
    <Experience />
    <Projects />
    <Sparetime />
    <History />
    <Contact />
    <Footer />
  </div>
  );
}

export default Home;
