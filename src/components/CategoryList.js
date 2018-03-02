import React from 'react';
import { connect } from 'react-redux';
import CategoryListItem from './CategoryListItem';
import selectCategories from '../selectors/categories';

export const CategoryList = props => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Categories</div>
      <div className="show-for-desktop">Category</div>
      <div className="show-for-desktop">Image</div>
    </div>
    <div className="list-body">
      {props.categories.length === 0 ? (
        <div className="list-item list-item--message">
          <span>No categories</span>
        </div>
      ) : (
        props.categories.map(category => {
          return <CategoryListItem key={category.id} {...category} />;
        })
      )}
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    categories: selectCategories(state.categories, state.filters)
  };
};

export default connect(mapStateToProps)(CategoryList);
