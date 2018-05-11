import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ProductListItem = ({
  id,
  name,
  image,
  price_sell,
  amount,
  createdAt
}) => (
  <Link className="list-item" to={`/admin/product/edit/${id}`}>
    <div>
      <h3 className="list-item__title">{name}</h3>
      <span className="list-item__sub-title">
        Cadastrado realizado:
        <strong> {moment(createdAt).format('DD/MM/YYYY')}</strong>
      </span>
      <br />
      <span className="list-item__sub-title">
        Preço de venda:
        <strong> R{numeral(price_sell).format('$0,0.00')}</strong>
      </span>
      <br />
      <span className="list-item__sub-title">
        Quantidade:<strong> {amount}</strong>
      </span>
    </div>
    <h3 className="list-item__data">
      <img className="list-item__image" src={image} />
    </h3>
  </Link>
);

export default ProductListItem;
