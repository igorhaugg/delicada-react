import React from 'react';
import { connect } from 'react-redux';
import SalesForm from './SalesForm';
import { startEditSale, startRemoveSale } from '../../../actions/sales';
import MenuAdmin from '../MenuAdmin';
import { confirmAlert } from 'react-confirm-alert';
import selectProducts from '../../../selectors/products-amount';
import selectSales from '../../../selectors/sales';
import { startEditProduct } from '../../../actions/products';

export class SalesEditPage extends React.Component {
  onSubmit = (sales, oldProduct) => {
    if (!(sales.product_id === oldProduct)) {
      const productToUpdateSubtract = this.props.products.filter(
        product => product.id === sales.product_id
      );
      const productUpdatedSubtract = {
        ...productToUpdateSubtract[0],
        amount: +productToUpdateSubtract[0].amount - 1
      };
      this.props.startEditProduct(
        productUpdatedSubtract.id,
        productUpdatedSubtract
      );

      const productToUpdateAdd = this.props.products.filter(
        product => product.id === oldProduct
      );
      const productUpdatedAdd = {
        ...productToUpdateAdd[0],
        amount: +productToUpdateAdd[0].amount + 1
      };
      this.props.startEditProduct(productUpdatedAdd.id, productUpdatedAdd);
    }
    this.props.startEditSale(this.props.sale.id, sales);
    this.props.history.push('/admin/sales');
  };
  onRemove = () => {
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Remove',
          onClick: () => this.onClickRemove()
        },
        {
          label: 'No'
        }
      ]
    });
  };
  onClickRemove = () => {
    const id = this.props.sale.id;
    this.props.startRemoveSale({ id });

    const saleToUpdate = this.props.sales.filter(s => s.id === id);

    const productToUpdate = this.props.products.filter(
      product => product.id === saleToUpdate[0].product_id
    );

    const productUpdated = {
      ...productToUpdate[0],
      amount: +productToUpdate[0].amount + 1
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
              <h1 className="page-header__title">Edit Sale</h1>
            </div>
          </div>
          <div className="content-container">
            <SalesForm
              client={this.props.sale}
              onSubmit={this.onSubmit}
              editForm={true}
            />

            <button
              className="button button--secondary"
              onClick={this.onRemove}
            >
              Remove Sale
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  sale: state.sales.find(sale => sale.id === props.match.params.id),
  products: selectProducts(state.products, state.filters),
  sales: selectSales(state.sales, state.filters)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditSale: (id, sale) => dispatch(startEditSale(id, sale)),
  startRemoveSale: data => dispatch(startRemoveSale(data)),
  startEditProduct: (id, product) => dispatch(startEditProduct(id, product))
});

export default connect(mapStateToProps, mapDispatchToProps)(SalesEditPage);
