import React from 'react';
import firebase from 'firebase';
import FileUploader from 'react-firebase-file-uploader';
import moment from 'moment';
import { connect } from 'react-redux';
import { SingleDatePicker } from 'react-dates';

import selectCategories from '../../../selectors/categories';
import selectProducts from '../../../selectors/products';

import ImageCompressor from 'image-compressor.js';

export class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category_id: props.product ? props.product.category_id : '',
      description: props.product ? props.product.description : '',
      image: props.product ? props.product.image : '',
      size: props.product ? props.product.size : '',
      price_sell: props.product ? props.product.price_sell.toString() : '',
      price_buy: props.product ? props.product.price_buy.toString() : '',
      amount: props.product ? props.product.amount.toString() : '1',
      createdAt: props.product ? moment(props.product.createdAt) : moment(),
      calendarFocused: false,
      showLoading: false,
      error: '',
      oldImage: null
    };
  }
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
  handleChange = event => {
    if (this.props.editForm) {
      this.setState({ oldImage: this.state.image });
    }
    this.setState({ image: undefined, showLoading: true });
    const file = event.target.files[0];

    if (
      file.name.endsWith('.jpeg') ||
      file.name.endsWith('.jpg') ||
      file.name.endsWith('.png') ||
      file.name.endsWith('.gif') ||
      file.name.endsWith('.JPEG') ||
      file.name.endsWith('.PNG') ||
      file.name.endsWith('.JPG') ||
      file.name.endsWith('.GIF')
    ) {
      let image;
      let p1 = new Promise(function(resolve, reject) {
        new ImageCompressor(file, {
          quality: 0.2,
          success(result) {
            const ref = firebase.storage().ref('images/products');
            const name = +new Date() + '-' + result.name;
            const metadata = { contentType: result.type };
            const task = ref.child(name).put(result, metadata);
            task.then(snapshot => {
              image = snapshot.downloadURL;
              return resolve(image);
            });
          },
          error(e) {
            reject(e);
          }
        });
      });

      p1.then(() => {
        this.setState({ image: image, showLoading: false });
      });
    } else {
      this.setState({
        showLoading: false,
        error: 'Por favor selecione uma imagem nos formatos (jpeg, jpg, png).'
      });
    }
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
      !this.state.size ||
      !this.state.price_sell ||
      !this.state.price_buy ||
      !this.state.amount ||
      !this.state.image
    ) {
      this.setState(() => ({
        error: 'Por favor preencha todos os campos.'
      }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit(
        {
          category_id: this.state.category_id,
          description: this.capitalizeFirstLetter(this.state.description),
          image: this.state.image,
          size: this.state.size,
          price_sell: parseFloat(this.state.price_sell, 10),
          price_buy: parseFloat(this.state.price_buy, 10),
          amount: this.state.amount,
          createdAt: this.state.createdAt.valueOf()
        },
        this.state.oldImage
      );
    }
  };
  capitalizeFirstLetter = string => {
    string = string.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}

        <input
          type="text"
          placeholder="Descrição"
          className="text-input"
          value={this.state.description}
          onChange={this.onDescriptionChange}
          required
        />

        <select
          className="select"
          onChange={this.onCategoryChange}
          value={this.state.category_id}
        >
          <option key="null" value="null">
            Selecionar Categoria
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
          placeholder="Tamanho"
          className="text-input"
          value={this.state.size}
          onChange={this.onSizeChange}
          required
        />

        <div className="form__group">
          <input
            type="text"
            placeholder="Preço de compra"
            className="text-input"
            value={this.state.price_buy}
            onChange={this.onPriceBuyChange}
            required
          />
          <input
            type="text"
            placeholder="Preço de venda"
            className="text-input"
            value={this.state.price_sell}
            onChange={this.onPriceSellChange}
            required
          />
          <input
            type="number"
            placeholder="Quantidade"
            className="text-input"
            value={this.state.amount}
            onChange={this.onAmountChange}
            required
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
          <i className="fas fa-cloud-upload-alt icon__file" />
          Selecionar imagem
          <input
            className="input-file"
            type="file"
            name="input"
            placeholder="Imagem"
            onChange={this.handleChange}
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
          {this.state.description &&
            this.state.category_id &&
            this.state.size &&
            this.state.price_sell &&
            this.state.price_buy &&
            this.state.image &&
            this.state.amount &&
            this.state.image && (
              <button className="button">
                {this.props.editForm ? 'Salvar' : 'Confirmar'}
              </button>
            )}
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

export default connect(mapStateToProps)(ProductForm);
