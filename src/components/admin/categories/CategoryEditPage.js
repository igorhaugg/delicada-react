import React from 'react';
import { connect } from 'react-redux';
import CategoryForm from './CategoryForm';
import {
  startEditCategory,
  startRemoveCategory
} from '../../../actions/categories';
import MenuAdmin from '../MenuAdmin';

export class CategoryEditPage extends React.Component {
  onSubmit = category => {
    this.props.startEditCategory(this.props.category.id, category);
    this.props.history.push('/category');
  };
  onRemove = () => {
    this.props.startRemoveCategory({ id: this.props.category.id });
    this.props.history.push('/category');
  };
  render() {
    return (
      <div className="dashboard">
        <MenuAdmin />
        <div className="dashboard__content">
          <div className="page-header">
            <div className="content-container">
              <h1 className="page-header__title">Edit Category</h1>
            </div>
          </div>
          <div className="content-container">
            <CategoryForm
              category={this.props.category}
              onSubmit={this.onSubmit}
            />
            <button
              className="button button--secondary"
              onClick={this.onRemove}
            >
              Remove Category
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  category: state.categories.find(
    category => category.id === props.match.params.id
  )
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditCategory: (id, category) =>
    dispatch(startEditCategory(id, category)),
  startRemoveCategory: data => dispatch(startRemoveCategory(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryEditPage);
