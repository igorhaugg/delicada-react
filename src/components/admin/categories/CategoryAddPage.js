import React from 'react';
import { connect } from 'react-redux';

import CategoryForm from './CategoryForm';
import MenuAdmin from '../MenuAdmin';
import { startAddCategory } from '../../../actions/categories';

export class CategoryAddPage extends React.Component {
  onSubmit = category => {
    this.props.startAddCategory(category);
    this.props.history.push('/admin/category');
  };
  render() {
    return (
      <div className="dashboard">
        <MenuAdmin />
        <div className="dashboard__content">
          <div className="page-header">
            <div className="content-container">
              <h1 className="page-header__title">Adicionar Categoria</h1>
            </div>
          </div>
          <div className="content-container">
            <CategoryForm onSubmit={this.onSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startAddCategory: category => dispatch(startAddCategory(category))
});

export default connect(undefined, mapDispatchToProps)(CategoryAddPage);
