import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = () => {
  return (
    <div className="wrapper breadcrumbs">
      <Link className="breadcrumbs__item" to="/">
        Início
      </Link>
      /
      <Link className="breadcrumbs__item" to="/products">
        Products
      </Link>
    </div>
  );
};

export default Breadcrumbs;
