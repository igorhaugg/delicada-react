import React from 'react';
import Banner from './Banner';
import Logo from './Logo';
import Products from './Products';
import Visit from './Visit';
import Shopping from './Shopping';
import Sociais from './Sociais';

const IndexPage = () => {
  return (
    <main className="wrapper">
      <Logo />
      <Banner />
      <Products />
      <Visit />
      <Shopping />
      <Sociais />
    </main>
  );
};

export default IndexPage;
