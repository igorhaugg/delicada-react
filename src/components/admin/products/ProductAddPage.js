import React from 'react';
import { connect } from 'react-redux';
import ProductForm from './ProductForm';
import { startAddProduct } from '../../../actions/products';
import MenuAdmin from '../MenuAdmin';

export class ProductAddPage extends React.Component {
  onSubmit = product => {
    this.props.startAddProduct(product);
    this.props.history.push('/product');
  };
  render() {
    return (
      <div className="dashboard">
        <MenuAdmin />
        <div className="dashboard__content">
          <div className="page-header">
            <div className="content-container">
              <h1 className="page-header__title">Add Product</h1>
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
