import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

class ProductListItem extends React.Component {
  render() {
    return (
      <Link className="products__item" to={`/products/${this.props.id}`}>
        <img className="products__item-image" src={this.props.image} />
        <div className="products__item-details">
          <span>{this.props.name}</span>
          <br />
          <span>
            Preço:
            <strong>R{numeral(this.props.price_sell).format('$0,0.00')}</strong>
          </span>
          <br />
          <span>
            Tamanho: <strong>{this.props.size}</strong>
          </span>
        </div>
      </Link>
    );
  }
}

export default ProductListItem;
