import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

class ProductListItem extends React.Component {
  render() {
    return (
      <Link className="products__item" to={`/produtos/${this.props.id}`}>
        <img className="products__item-image" src={this.props.image} />
        <div className="products__item-details">
          <span>
            {this.props.name} - <strong>{this.props.size}</strong>
          </span>
          <br />
          <small>
            Preço: &nbsp;
            <strong>
              <span>R$</span>
              {this.props.price_sell
                .toFixed(2)
                .toString()
                .replace('.', ',')}
            </strong>
          </small>
          <br />
        </div>
      </Link>
    );
  }
}

export default ProductListItem;
