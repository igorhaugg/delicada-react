import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectCategories from '../../../selectors/categories';

export const CategoriesSummary = ({ categoryCount }) => {
  const categoryWord = categoryCount === 1 ? 'category' : 'categories';

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{categoryCount}</span> {categoryWord}
        </h1>
        <div className="page-header__actions">
          <Link className="button" to="/admin/category/create">
            Add Category
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const visibleCategories = selectCategories(state.categories, state.filters);

  return {
    categoryCount: visibleCategories.length
  };
};

export default connect(mapStateToProps)(CategoriesSummary);
