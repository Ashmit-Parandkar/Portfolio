import React from 'react';
// components
import Banner from './components/Banner.jsx';
import Header from './components/Header.jsx';
import Nav from './components/Nav.jsx';
import About from './components/About.jsx';
import Education from './components/Education.jsx';
import Experience from './components/Experience.jsx';
import Work from './components/Work.jsx';
import Contact from './components/Contact.jsx';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Education />
      <Experience />
      <Work />
      <Contact />
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
};

export default App;
