import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import { Link } from 'react-router-dom';

const CategoryListItem = ({ id, name, image }) => (
  <Link className="list-item" to={`/admin/category/edit/${id}`}>
    <div>
      <h3 className="list-item__title">{name}</h3>
    </div>
    <h3 className="list-item__data">
      <img className="list-item__image" src={image} />
    </h3>
  </Link>
);

export default CategoryListItem;
