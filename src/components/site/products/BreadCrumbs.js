import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = props => {
  return (
    <div className="wrapper breadcrumbs">
      <Link className="breadcrumbs__item" to="/">
        Início
      </Link>
      <span className="breadcrumbs__separator">»</span>
      <Link className="breadcrumbs__item" to="/products">
        Products
      </Link>
      {props.product ? (
        <Fragment>
          <span className="breadcrumbs__separator">»</span>
          <span className="breadcrumbs__item">{props.product}</span>
        </Fragment>
      ) : null}
    </div>
  );
};

export default Breadcrumbs;
