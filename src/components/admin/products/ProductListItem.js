import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ProductListItem = ({ id, name, image, price_sell, createdAt }) => (
  <Link className="list-item" to={`/product/edit/${id}`}>
    <div>
      <h3 className="list-item__title">{name}</h3>
      <span className="list-item__sub-title">
        {moment(createdAt).format('MMMM Do, YYYY')}
      </span>
      <br />
      <span className="list-item__sub-title">
        Price Sell: <strong>R{numeral(price_sell).format('$0,0.00')}</strong>
      </span>
    </div>
    <h3 className="list-item__data">
      <img className="list-item__image" src={image} />
    </h3>
  </Link>
);

export default ProductListItem;
