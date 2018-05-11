import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import selectCategories from '../../../selectors/categories';

export const CategoriesSummary = ({ categoryCount }) => {
  const categoryWord = categoryCount === 1 ? 'categoria' : 'categorias';
  const registerWord = categoryCount === 1 ? 'cadastrada' : 'cadastradas';

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          <span>{categoryCount}</span> {categoryWord} {registerWord}
        </h1>
        <div className="page-header__actions">
          <Link className="button" to="/admin/category/create">
            Adicionar
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
