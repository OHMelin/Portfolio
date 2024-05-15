import React from 'react';
import Hero from '../components/Home/Hero';
import Experience from '../components/Home/Experience';
import Projects from '../components/Home/Projects';
import Footer from '../components/Home/Footer';
import Contact from '../components/Home/Contact';
import History from '../components/Home/History';
import Sparetime from '../components/Home/Sparetime';

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
