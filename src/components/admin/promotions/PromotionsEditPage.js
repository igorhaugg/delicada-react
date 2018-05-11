import React from 'react';
import { connect } from 'react-redux';
import { confirmAlert } from 'react-confirm-alert';

import PromotionsForm from './PromotionsForm';
import MenuAdmin from '../MenuAdmin';
import {
  startEditPromotion,
  startRemovePromotion
} from '../../../actions/promotions';

export class PromotionsEditPage extends React.Component {
  onSubmit = promotion => {
    this.props.startEditPromotion(this.props.promotion.id, promotion);
    this.props.history.push('/admin/promotions');
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
    this.props.startRemovePromotion({ id: this.props.promotion.id });
    this.props.history.push('/admin/promotion');
  };
  render() {
    return (
      <div className="dashboard">
        <MenuAdmin />
        <div className="dashboard__content">
          <div className="page-header">
            <div className="content-container">
              <h1 className="page-header__title">Editar Promoção</h1>
            </div>
          </div>
          <div className="content-container">
            <PromotionsForm
              promotion={this.props.promotion}
              onSubmit={this.onSubmit}
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
  promotion: state.promotions.find(
    promotion => promotion.id === props.match.params.id
  )
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditPromotion: (id, promotion) =>
    dispatch(startEditPromotion(id, promotion)),
  startRemovePromotion: data => dispatch(startRemovePromotion(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(PromotionsEditPage);
