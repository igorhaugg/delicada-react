import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import selectProducts from '../../../selectors/products';
import selectProductsTotal from '../../../selectors/products-total';
import selectProductsTotalAmount from '../../../selectors/products-total-amount';

export const ProductsSummary = ({
  productCount,
  productsTotal,
  productsAmount
}) => {
  const productWord = productCount === 1 ? 'produto' : 'produtos';
  const registerWord = productCount === 1 ? 'cadastrado' : 'cadastrados';
  const formattedProductsTotal = numeral(productsTotal).format('$0,0.00');

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          <span>{productCount}</span> {productWord} {registerWord}, totalizando
          <span> R{formattedProductsTotal}</span>, estoque: {productsAmount}{' '}
          {productWord}
        </h1>
        <div className="page-header__actions">
          <Link className="button" to="/admin/product/create">
            Adicionar
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const visibleProducts = selectProducts(state.products, state.filters);

  return {
    productCount: visibleProducts.length,
    productsTotal: selectProductsTotal(visibleProducts),
    productsAmount: selectProductsTotalAmount(visibleProducts)
  };
};

export default connect(mapStateToProps)(ProductsSummary);
