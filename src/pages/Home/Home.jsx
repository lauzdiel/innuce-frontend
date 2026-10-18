import React from 'react';


import Hero from './Hero/hero';
import Domains from './Domains/domains';
import Facilities from './Facilities/Facilities';
import ApplyAccess from './ApplyAccess/ApplyAccess';
import OurNumbers from './OurNumbers/OurNumbers';

function Home() {
  return (
    <>
      <Hero />
      <Domains />
      <Facilities />
      <ApplyAccess />
      <OurNumbers />
    </>
  );
}

export default Home;