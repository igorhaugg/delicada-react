import React from 'react';
import { connect } from 'react-redux';

import MenuAdmin from '../MenuAdmin';
import ProductForm from './ProductForm';
import { startAddProduct } from '../../../actions/products';

export class ProductAddPage extends React.Component {
  onSubmit = product => {
    this.props.startAddProduct(product);
    this.props.history.push('/admin/product');
  };
  render() {
    return (
      <div className="dashboard">
        <MenuAdmin />
        <div className="dashboard__content">
          <div className="page-header">
            <div className="content-container">
              <h1 className="page-header__title">Adicionar Produto</h1>
            </div>
          </div>
          <div className="content-container">
            <ProductForm onSubmit={this.onSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startAddProduct: product => dispatch(startAddProduct(product))
});

export default connect(undefined, mapDispatchToProps)(ProductAddPage);
