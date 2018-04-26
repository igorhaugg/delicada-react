import React from 'react';
import { connect } from 'react-redux';
// import CategoryForm from './CategoryForm';
import { startAddCategory } from '../../../actions/categories';
import MenuAdmin from '../MenuAdmin';

export class SalesAddPage extends React.Component {
  onSubmit = category => {
    this.props.startAddCategory(category);
    this.props.history.push('/admin/sales');
  };
  render() {
    return (
      <div className="dashboard">
        <MenuAdmin />
        <div className="dashboard__content">
          <div className="page-header">
            <div className="content-container">
              <h1 className="page-header__title">Register a Sale</h1>
            </div>
          </div>
          <div className="content-container">
            {/* <CategoryForm onSubmit={this.onSubmit} /> */}
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startAddCategory: category => dispatch(startAddCategory(category))
});

export default connect(undefined, mapDispatchToProps)(SalesAddPage);
