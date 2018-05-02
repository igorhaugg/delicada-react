import React from 'react';
import { connect } from 'react-redux';
import ProductListItem from './ProductListItem';
import selectProducts from '../../../selectors/products-amount';

export const ProductList = props => (
  <div className="wrapper products products-size">
    {props.products.length === 0 ? (
      <div className="wrapper productslist-item--message">
        <span>Nenhum produto encontrado!</span>
      </div>
    ) : (
      props.products.map(product => {
        return <ProductListItem key={product.id} {...product} />;
      })
    )}
  </div>
);

const mapStateToProps = state => {
  return {
    products: selectProducts(state.products, state.filters)
  };
};

export default connect(mapStateToProps)(ProductList);
