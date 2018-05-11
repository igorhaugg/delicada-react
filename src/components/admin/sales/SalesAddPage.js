import React from 'react';
import { connect } from 'react-redux';

import MenuAdmin from '../MenuAdmin';
import SalesForm from './SalesForm';
import selectProducts from '../../../selectors/products-amount';
import { startAddSale } from '../../../actions/sales';
import { startEditProduct } from '../../../actions/products';

export class SalesAddPage extends React.Component {
  onSubmit = sale => {
    this.props.startAddSale(sale);
    const productToUpdate = this.props.products.filter(
      product => product.id === sale.product_id
    );
    const productUpdated = {
      ...productToUpdate[0],
      amount: productToUpdate[0].amount - 1
    };
    this.props.startEditProduct(productUpdated.id, productUpdated);
    this.props.history.push('/admin/sales');
  };
  render() {
    return (
      <div className="dashboard">
        <MenuAdmin />
        <div className="dashboard__content">
          <div className="page-header">
            <div className="content-container">
              <h1 className="page-header__title">Adicionar uma venda</h1>
            </div>
          </div>
          <div className="content-container">
            <SalesForm onSubmit={this.onSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: selectProducts(state.products, state.filters)
  };
};

const mapDispatchToProps = dispatch => ({
  startEditProduct: (id, product, oldImage) =>
    dispatch(startEditProduct(id, product, oldImage)),
  startAddSale: sale => dispatch(startAddSale(sale))
});

export default connect(mapStateToProps, mapDispatchToProps)(SalesAddPage);
