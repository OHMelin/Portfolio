import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Banner from './assets/banner.jpg'
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div>
      <Helmet>
        <title>OHMelin's Portfolio</title>
        <meta name="description" content="Visit my site to view my projects and read more about me!" />

        <meta property="og:url" content="https://ohmelin.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="OHMelin's Portfolio" />
        <meta property="og:description" content="Visit my site to view my projects and read more about me!" />
        <meta property="og:image" content={Banner} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="ohmelin.com" />
        <meta property="twitter:url" content="https://ohmelin.com/" />
        <meta name="twitter:title" content="OHMelin's Portfolio" />
        <meta name="twitter:description" content="Visit my site to view my projects and read more about me!" />
        <meta name="twitter:image" content={Banner} />
      </Helmet>
      <Hero />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
