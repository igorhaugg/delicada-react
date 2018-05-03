import React from 'react';
import Banner from './Banner';
import Logo from './Logo';
import Latest from './Latest';
import Visit from './Visit';
import Brands from './Brands';

const MainContent = () => {
  return (
    <main className="wrapper">
      <Logo />
      <Banner />
      <Latest />
      <Visit />
      <Brands />
    </main>
  );
};

export default MainContent;
