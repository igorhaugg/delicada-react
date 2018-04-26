import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectProducts from '../../../selectors/products';
import selectProductsTotal from '../../../selectors/products-total';

export const SalesSummary = ({ productCount, productsTotal }) => {
  const productWord = productCount === 1 ? 'product' : 'products';
  const formattedProductsTotal = numeral(productsTotal).format('$0,0.00');

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{productCount}</span> {productWord} totalling{' '}
          <span>R{formattedProductsTotal}</span>
        </h1>
        <div className="page-header__actions">
          <Link className="button" to="/admin/sales/create">
            Make a Sale
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
    productsTotal: selectProductsTotal(visibleProducts)
  };
};

export default connect(mapStateToProps)(SalesSummary);
