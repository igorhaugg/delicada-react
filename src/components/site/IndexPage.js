import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './home/Main';

const IndexPage = () => {
  return (
    <Fragment>
      <Header />
      <Main />
      <Footer />
    </Fragment>
  );
};

export default IndexPage;
