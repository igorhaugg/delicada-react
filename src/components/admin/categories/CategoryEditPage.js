import React from 'react';
import { connect } from 'react-redux';
import { confirmAlert } from 'react-confirm-alert';

import CategoryForm from './CategoryForm';
import MenuAdmin from '../MenuAdmin';
import {
  startEditCategory,
  startRemoveCategory
} from '../../../actions/categories';

export class CategoryEditPage extends React.Component {
  onSubmit = (category, oldImage) => {
    this.props.startEditCategory(this.props.category.id, category, oldImage);
    this.props.history.push('/admin/category');
  };
  onRemove = () => {
    confirmAlert({
      title: 'Confirmar',
      message: 'Você tem certeza?',
      buttons: [
        {
          label: 'Remover',
          onClick: () => this.onClickRemove()
        },
        {
          label: 'Cancelar'
        }
      ]
    });
  };
  onClickRemove = () => {
    const hasProducts = this.props.products.find(
      product => product.category_id === this.props.category.id
    );
    if (hasProducts) {
      confirmAlert({
        title: 'Acesso negado!',
        message:
          'Não é possível remover uma categoria que possui produtos cadastrados.',
        buttons: [
          {
            label: 'Ok'
          }
        ]
      });
    } else {
      this.props.startRemoveCategory({ id: this.props.category.id });
      this.props.history.push('/admin/category');
    }
  };
  render() {
    return (
      <div className="dashboard">
        <MenuAdmin />
        <div className="dashboard__content">
          <div className="page-header">
            <div className="content-container">
              <h1 className="page-header__title">Editar Categoria</h1>
            </div>
          </div>
          <div className="content-container">
            <CategoryForm
              category={this.props.category}
              onSubmit={this.onSubmit}
              editForm={true}
            />
            <button
              className="button button--secondary"
              onClick={this.onRemove}
            >
              Remover
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
  ),
  products: state.products
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditCategory: (id, category, oldImage) =>
    dispatch(startEditCategory(id, category, oldImage)),
  startRemoveCategory: data => dispatch(startRemoveCategory(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryEditPage);
