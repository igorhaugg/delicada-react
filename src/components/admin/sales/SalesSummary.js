import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectSales from '../../../selectors/sales';
import selectTotalSales from '../../../selectors/sales-total';

export const SalesSummary = ({ saleCount, salesTotal }) => {
  const saleWord = saleCount === 1 ? 'sale' : 'sales';
  const formattedSalesTotal = numeral(salesTotal).format('$0,0.00');

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{saleCount}</span> {saleWord} totalling{' '}
          <span>R{formattedSalesTotal}</span>
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
  const visibleSales = selectSales(state.sales, state.filters, state.clients);
  const salesTotal = selectTotalSales(visibleSales, state.products);
  return {
    saleCount: visibleSales.length,
    salesTotal
  };
};

export default connect(mapStateToProps)(SalesSummary);
