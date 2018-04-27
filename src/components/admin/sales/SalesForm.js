import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import { connect } from 'react-redux';
import selectClients from '../../../selectors/clients';
import selectProducts from '../../../selectors/products-amount';
import selectSales from '../../../selectors/sales';

export class SalesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      client_id: props.client ? props.client.client_id : '',
      product_id: props.client ? props.client.product_id : '',
      payment: props.client ? props.client.payment : '',
      status: props.client ? props.client.status : 'open',
      createdAt: props.client ? moment(props.client.createdAt) : moment(),
      calendarFocused: false,
      error: '',
      image: ''
    };
  }
  onClientChange = e => {
    const client_id = e.target.value;
    this.setState(() => ({ client_id }));
  };
  onProductChange = e => {
    const product_id = e.target.value;
    const productSelected = this.props.products.filter(
      product => product.id === product_id
    );
    const image = productSelected[0].image;
    this.setState(() => ({ product_id, image }));
  };
  onPaymentChange = e => {
    const payment = e.target.value;
    this.setState(() => ({ payment }));
  };
  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = e => {
    e.preventDefault();
    if (
      !this.state.client_id ||
      !this.state.product_id ||
      !this.state.payment
    ) {
      this.setState(() => ({
        error: 'Please select a client, product and payment.'
      }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        client_id: this.state.client_id,
        product_id: this.state.product_id,
        payment: this.state.payment,
        status: this.state.status,
        createdAt: this.state.createdAt.valueOf()
      });
    }
  };
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}

        <select
          className="select"
          onChange={this.onClientChange}
          value={this.state.client_id}
        >
          <option key="null" value="null">
            Select client
          </option>
          {this.props.clients.map(client => {
            return (
              <option key={client.id} value={client.id}>
                {client.name}
              </option>
            );
          })}
        </select>

        <select
          className="select"
          onChange={this.onProductChange}
          value={this.state.product_id}
        >
          <option key="null" value="null">
            Select product
          </option>
          {this.props.products.map(product => {
            return (
              <option key={product.id} value={product.id}>
                {product.name}
              </option>
            );
          })}
        </select>

        {this.state.image && (
          <img className="list-item__image" src={this.state.image} />
        )}

        <input
          type="text"
          placeholder="Payment"
          className="text-input"
          value={this.state.payment}
          onChange={this.onPaymentChange}
          required
        />

        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />

        <div>
          {this.state.client_id &&
            this.state.product_id &&
            this.state.payment && (
              <button className="button">Make the Sale</button>
            )}
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    clients: selectClients(state.clients, state.filters),
    products: selectProducts(state.products, state.filters),
    sales: selectSales(state.sales, state.filters)
  };
};

export default connect(mapStateToProps)(SalesForm);
