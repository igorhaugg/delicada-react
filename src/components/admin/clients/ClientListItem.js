import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ClientListItem = ({ id, name, phone, address, workplace }) => (
  <Link className="list-item" to={`/admin/client/edit/${id}`}>
    <div>
      <h3 className="list-item__title">{name}</h3>
      <p className="list-item__sub-title">Phone: {phone}</p>
      {workplace && <p className="list-item__sub-title">Address: {address}</p>}
      {workplace && (
        <p className="list-item__sub-title">Work at: {workplace}</p>
      )}
    </div>
  </Link>
);

export default ClientListItem;
