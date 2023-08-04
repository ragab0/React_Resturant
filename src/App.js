import React from 'react';
import './App.css';

// import * as all from './components';
import { Navbar } from './components';
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';

export default function App() {
  // 01Note
  // console.log('01Note', all); 

  return (
    <>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </>
  )
};