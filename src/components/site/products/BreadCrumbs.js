import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = props => {
  return (
    <div className="wrapper breadcrumbs">
      <Link className="breadcrumbs__item" to="/">
        Início
      </Link>
      /
      <Link className="breadcrumbs__item" to="/products">
        Products
      </Link>
      {props.product ? (
        <div>
          <span>/</span>
          <span className="breadcrumbs__item">{props.product}</span>
        </div>
      ) : null}
    </div>
  );
};

export default Breadcrumbs;
