import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import Details from './products/Details';

class ProductsDetailPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Fragment>
        <Header />
        <Details />
        <Footer />
      </Fragment>
    );
  }
}
export default ProductsDetailPage;
