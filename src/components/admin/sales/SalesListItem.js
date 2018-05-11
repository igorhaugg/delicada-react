import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const SalesListItem = ({ id, createdAt, name, image, price }) => (
  <Link className="list-item" to={`/admin/sales/edit/${id}`}>
    <div>
      <h3 className="list-item__title">{name}</h3>
      <span className="list-item__sub-title">
        Compra realizada em:
        <strong> {moment(createdAt).format('DD/MM/YYYY')}</strong>
      </span>
      <br />
      <span className="list-item__sub-title">
        Preço pago: <strong>R{numeral(price).format('$0,0.00')}</strong>
      </span>
    </div>
    <h3 className="list-item__data">
      <img className="list-item__image" src={image} />
    </h3>
  </Link>
);

export default SalesListItem;
