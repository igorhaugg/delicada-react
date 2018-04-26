import React from 'react';
import { connect } from 'react-redux';
import ProductForm from './ProductForm';
import {
  startEditProduct,
  startRemoveProduct
} from '../../../actions/products';
import MenuAdmin from '../MenuAdmin';
import { confirmAlert } from 'react-confirm-alert';

export class ProductEditPage extends React.Component {
  onSubmit = (product, oldImage) => {
    this.props.startEditProduct(this.props.product.id, product, oldImage);
    this.props.history.push('/admin/product');
  };
  onRemove = () => {
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.onClickRemove()
        },
        {
          label: 'No'
        }
      ]
    });
  };
  onClickRemove = () => {
    this.props.startRemoveProduct({ id: this.props.product.id });
    this.props.history.push('/admin/product');
  };
  render() {
    return (
      <div className="dashboard">
        <MenuAdmin />
        <div className="dashboard__content">
          <div className="page-header">
            <div className="content-container">
              <h1 className="page-header__title">Edit Product</h1>
            </div>
          </div>
          <div className="content-container">
            <ProductForm
              product={this.props.product}
              onSubmit={this.onSubmit}
              editForm={true}
            />
            <button
              className="button button--secondary"
              onClick={this.onRemove}
            >
              Remove Product
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  product: state.products.find(product => product.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditProduct: (id, product, oldImage) =>
    dispatch(startEditProduct(id, product, oldImage)),
  startRemoveProduct: data => dispatch(startRemoveProduct(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductEditPage);
