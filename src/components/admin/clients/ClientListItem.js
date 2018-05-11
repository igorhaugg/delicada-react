import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import { Link } from 'react-router-dom';

const ClientListItem = ({ id, name, phone, address, workplace }) => (
  <Link className="list-item" to={`/admin/client/edit/${id}`}>
    <div>
      <h3 className="list-item__title">{name}</h3>
      <p className="list-item__sub-title">Telefone: {phone}</p>
      {address && <p className="list-item__sub-title">Endereço: {address}</p>}
      {workplace && (
        <p className="list-item__sub-title">Local de trabalho: {workplace}</p>
      )}
    </div>
  </Link>
);

export default ClientListItem;
