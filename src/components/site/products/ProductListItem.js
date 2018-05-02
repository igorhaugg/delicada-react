import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ProductListItem = ({ id, name, image, price_sell, size, createdAt }) => (
  <Link className="products__item" to={`/products/${id}`}>
    <img className="products__item-image" src={image} />
    <div className="products__item-details">
      <span>{name}</span>
      <br />
      <span>
        Preço: <strong>R{numeral(price_sell).format('$0,0.00')}</strong>
      </span>
      <br />
      <span>
        Tamanho: <strong>{size}</strong>
      </span>
    </div>
  </Link>
);

export default ProductListItem;
