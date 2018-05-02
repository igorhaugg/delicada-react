import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import MainContent from './products/MainContent';

const ProductsPage = () => {
  return (
    <Fragment>
      <Header />
      <MainContent />
      <Footer />
    </Fragment>
  );
};

export default ProductsPage;
