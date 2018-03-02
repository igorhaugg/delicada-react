import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import FileUploader from 'react-firebase-file-uploader';
import firebase from 'firebase';
import { connect } from 'react-redux';
import selectCategories from '../selectors/categories';
import selectProducts from '../selectors/products';

export class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category_id: props.product ? props.product.category_id : '',
      name: props.product ? props.product.name : '',
      description: props.product ? props.product.description : '',
      image: props.product ? props.product.image : '',
      size: props.product ? props.product.size : '',
      price_sell: props.product ? props.product.price_sell.toString() : '',
      price_buy: props.product ? props.product.price_buy.toString() : '',
      amount: props.product ? props.product.amount.toString() : '',
      // amount: props.product ? props.expense.amount.toString() : '',
      createdAt: props.product ? moment(props.product.createdAt) : moment(),
      calendarFocused: false,
      showLoading: false,
      error: ''
    };
  }
  onNameChange = e => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  };
  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onCategoryChange = e => {
    const category_id = e.target.value;
    this.setState(() => ({ category_id }));
  };
  onSizeChange = e => {
    const size = e.target.value;
    this.setState(() => ({ size }));
  };
  onPriceBuyChange = e => {
    const price_buy = e.target.value;
    if (!price_buy || price_buy.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ price_buy }));
    }
  };
  onPriceSellChange = e => {
    const price_sell = e.target.value;
    if (!price_sell || price_sell.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ price_sell }));
    }
  };
  onAmountChange = e => {
    const amount = e.target.value;
    this.setState(() => ({ amount }));
  };
  handleUploadStart = () => this.setState({ showLoading: true });
  handleUploadSuccess = filename => {
    firebase
      .storage()
      .ref('images/products')
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ image: url, showLoading: false }));
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
      !this.state.description ||
      !this.state.category_id ||
      !this.state.name ||
      !this.state.size ||
      !this.state.price_sell ||
      !this.state.price_buy ||
      !this.state.amount ||
      !this.state.image
    ) {
      this.setState(() => ({
        error: 'Please provide name, description and image.'
      }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        category_id: this.state.category_id,
        name: this.state.name,
        description: this.state.description,
        image: this.state.image,
        size: this.state.size,
        price_sell: parseFloat(this.state.price_sell, 10),
        price_buy: parseFloat(this.state.price_buy, 10),
        amount: this.state.amount,
        createdAt: this.state.createdAt.valueOf()
      });
    }
  };
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          type="text"
          placeholder="Name"
          autoFocus
          className="text-input"
          value={this.state.name}
          onChange={this.onNameChange}
        />

        <input
          type="text"
          placeholder="Description"
          className="text-input"
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />

        <select
          className="select"
          onChange={this.onCategoryChange}
          value={this.state.category_id}
        >
          <option key="null" value="null">
            Select category
          </option>
          {this.props.categories.map(category => {
            return (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            );
          })}
        </select>

        <input
          type="text"
          placeholder="Size"
          className="text-input"
          value={this.state.size}
          onChange={this.onSizeChange}
        />

        <div className="form__group">
          <input
            type="text"
            placeholder="Price buy"
            className="text-input"
            value={this.state.price_buy}
            onChange={this.onPriceBuyChange}
          />
          <input
            type="text"
            placeholder="Price sell"
            className="text-input"
            value={this.state.price_sell}
            onChange={this.onPriceSellChange}
          />
          <input
            type="number"
            placeholder="Amount"
            className="text-input"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
        </div>

        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />

        <label className="label button">
          Select your file
          <FileUploader
            accept="image/*"
            name="image"
            randomizeFilename
            hidden
            storageRef={firebase.storage().ref('images/products')}
            onUploadStart={this.handleUploadStart}
            onUploadSuccess={this.handleUploadSuccess}
          />
        </label>

        {this.state.showLoading && (
          <div className="loader__small">
            <img className="loader__image" src="/images/loader.gif" />
          </div>
        )}

        {this.state.image && (
          <img className="list-item__image" src={this.state.image} />
        )}

        <div>
          <button className="button">Save Product</button>
          {/* {this.state.image && <button className="button">Save Product</button>} */}
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: selectCategories(state.categories, state.filters),
    products: selectProducts(state.products, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseForm);
