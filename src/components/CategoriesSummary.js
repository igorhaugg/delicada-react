import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectCategories from '../selectors/categories';
import selectCategoriesTotal from '../selectors/categories-total';

export const CategoriesSummary = ({ categoryCount, categoriesTotal }) => {
  const categoryWord = categoryCount === 1 ? 'category' : 'categories';
  const formattedCategoriesTotal = numeral(categoriesTotal).format('$0,0.00');

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{categoryCount}</span> {categoryWord}
        </h1>
        <div className="page-header__actions">
          <Link className="button" to="/category/create">
            Add Categorya
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const visibleCategories = selectCategories(state.categories, state.filters);

  return {
    categoryCount: visibleCategories.length,
    categoriesTotal: selectCategoriesTotal(visibleCategories)
  };
};

export default connect(mapStateToProps)(CategoriesSummary);
