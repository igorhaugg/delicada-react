import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import { Link } from 'react-router-dom';

const PromotionsListItem = ({ id, description, valid }) => {
  const situation = valid === 'yes' ? 'ativa' : 'inativa';
  return (
    <Link className="list-item" to={`/admin/promotions/edit/${id}`}>
      <div>
        <h3 className="list-item__title">{description}</h3>
        <p className="list-item__sub-title">Situação: {situation}</p>
      </div>
    </Link>
  );
};

export default PromotionsListItem;
