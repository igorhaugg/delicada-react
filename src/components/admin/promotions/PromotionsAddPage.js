import React from 'react';
import { connect } from 'react-redux';

import PromotionsForm from './PromotionsForm';
import MenuAdmin from '../MenuAdmin';
import { startAddPromotion } from '../../../actions/promotions';

export class PromotionsAddPage extends React.Component {
  onSubmit = promotion => {
    this.props.startAddPromotion(promotion);
    this.props.history.push('/admin/promotions');
  };
  render() {
    return (
      <div className="dashboard">
        <MenuAdmin />
        <div className="dashboard__content">
          <div className="page-header">
            <div className="content-container">
              <h1 className="page-header__title">Adicionar Promoção</h1>
            </div>
          </div>
          <div className="content-container">
            <PromotionsForm onSubmit={this.onSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startAddPromotion: promotion => dispatch(startAddPromotion(promotion))
});

export default connect(undefined, mapDispatchToProps)(PromotionsAddPage);
