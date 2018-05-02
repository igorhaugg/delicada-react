import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import Footer from '../Footer';
// import MainContent from './products/MainContent';
import selectProducts from '../../../selectors/products';

const ProductDetail = props => {
  console.log(props.filters);
  return (
    <Fragment>
      <Header />
      <h2>teste</h2>
      <Footer />
    </Fragment>
  );
};

const mapStateToProps = state => ({
  filters: state.filters,
  products: selectProducts(state.products, state.filters)
});

export default connect(mapStateToProps)(ProductDetail);
