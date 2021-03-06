import React from 'react';
import { connect } from 'react-redux';

import ProductListItem from './ProductListItem';
import selectProducts from '../../../selectors/products';

export const ProductList = props => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Produtos</div>
      <div className="show-for-desktop">Produto</div>
      <div className="show-for-desktop">Imagem</div>
    </div>
    <div className="list-body">
      {props.products.length === 0 ? (
        <div className="list-item list-item--message">
          <span>Nenhuma produto cadastrado</span>
        </div>
      ) : (
        props.products.map(product => {
          return <ProductListItem key={product.id} {...product} />;
        })
      )}
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    products: selectProducts(state.products, state.filters)
  };
};

export default connect(mapStateToProps)(ProductList);
