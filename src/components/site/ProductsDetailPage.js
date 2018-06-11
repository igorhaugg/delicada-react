import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import Details from './products/Details';
import Social from './Social';

class ProductsDetailPage extends React.Component {
  componentDidMount() {
    document.title = 'Delicada Mulher - Produto';
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 2);
  }
  componentWillUnmount() {
    document.title = 'Delicada Mulher';
  }
  render() {
    return (
      <Fragment>
        <Header />
        <Details />
        <Social />
        <Footer />
      </Fragment>
    );
  }
}
export default ProductsDetailPage;
