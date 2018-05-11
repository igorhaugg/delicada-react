import React from 'react';

import Logo from './Logo';
import Banner from './Banner';
import Promotions from './Promotions';
import Latest from './Latest';
import Visit from './Visit';
import Brands from './Brands';

const MainContent = () => {
  return (
    <main className="wrapper">
      <Logo />
      <Banner />
      <Promotions />
      <Latest />
      <Visit />
      <Brands />
    </main>
  );
};

export default MainContent;
