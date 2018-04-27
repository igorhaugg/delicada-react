import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const SalesListItem = ({ id, createdAt, name, image, price }) => (
  <Link className="list-item" to={`/admin/sales/edit/${id}`}>
    <div>
      <h3 className="list-item__title">Bought by: {name}</h3>
      <span className="list-item__sub-title">
        At: {moment(createdAt).format('MMMM Do, YYYY')}
      </span>
      <br />
      <span className="list-item__sub-title">
        Price paid: <strong>R{numeral(price).format('$0,0.00')}</strong>
      </span>
    </div>
    <h3 className="list-item__data">
      <img className="list-item__image" src={image} />
    </h3>
  </Link>
);

export default SalesListItem;
