import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import selectSales from '../../../selectors/sales';
import selectTotalSales from '../../../selectors/sales-total';

export const SalesSummary = ({ saleCount, salesTotal }) => {
  const saleWord = saleCount === 1 ? 'venda' : 'vendas';
  const makeWord = saleCount === 1 ? 'realizada' : 'realizadas';
  const formattedSalesTotal = numeral(salesTotal).format('$0,0.00');

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          <span>{saleCount}</span> {saleWord} {makeWord}, totalizando
          <span> R{formattedSalesTotal}</span>
        </h1>
        <div className="page-header__actions">
          <Link className="button" to="/admin/sales/create">
            Adicionar
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
