import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import { Link } from 'react-router-dom';

const ClientListBirthday = ({ name, createdAt }) => (
  <div className="list-item--birthday">
    <h3 className="list-item__title">🎁 {name}</h3>
    <p className="list-item__sub-title">
      Dia: {moment(createdAt).format('DD/MM/YYYY')}
    </p>
  </div>
);

export default ClientListBirthday;
