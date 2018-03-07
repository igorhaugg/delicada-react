import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ClientListBirthday = ({ name, createdAt }) => (
  <div className="list-item--birthday">
    <h3 className="list-item__title">🎁 {name}</h3>
    <p className="list-item__sub-title">Birthday: {createdAt}</p>
  </div>
);

export default ClientListBirthday;
