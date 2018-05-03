import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import { setProductFilter } from '../../../actions/filters';

class ProductListItem extends React.Component {
  render() {
    return (
      <Link
        className="products__item"
        to={`/products/details`}
        onClick={() => this.props.setProductFilter(this.props.id)}
      >
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

const mapDispatchToProps = dispatch => ({
  setProductFilter: product => dispatch(setProductFilter(product))
});

export default connect(null, mapDispatchToProps)(ProductListItem);
