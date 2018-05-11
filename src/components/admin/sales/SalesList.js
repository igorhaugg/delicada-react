import React from 'react';
import { connect } from 'react-redux';

import SalesListItem from './SalesListItem';
import selectSales from '../../../selectors/sales';
import selectClients from '../../../selectors/clients';
import selectProducts from '../../../selectors/products';

export const SalesList = props => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Vendas</div>
      <div className="show-for-desktop">Venda</div>
    </div>
    <div className="list-body">
      {props.sales.length === 0 ? (
        <div className="list-item list-item--message">
          <span>Nenhuma venda cadastrada</span>
        </div>
      ) : (
        props.sales.map(sale => {
          const clientName = props.clients.filter(
            client => client.id === sale.client_id
          );
          const productInfo = props.products.filter(
            product => product.id === sale.product_id
          );
          if (clientName[0] && productInfo[0]) {
            const saleNew = {
              ...sale,
              name: clientName[0].name,
              image: productInfo[0].image,
              price: sale.price
            };
            return <SalesListItem key={sale.id} {...saleNew} />;
          }
        })
      )}
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    sales: selectSales(state.sales, state.filters),
    clients: selectClients(state.clients, state.filters),
    products: selectProducts(state.products, state.filters)
  };
};

export default connect(mapStateToProps)(SalesList);
