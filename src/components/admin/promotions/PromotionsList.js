import React from 'react';
import { connect } from 'react-redux';

import PromotionsListItem from './PromotionsListItem';

export const PromotionsList = props => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Promoções</div>
      <div className="show-for-desktop">Promoção</div>
    </div>
    <div className="list-body">
      {props.promotions.length === 0 ? (
        <div className="list-item list-item--message">
          <span>Nenhuma promoção cadastrada</span>
        </div>
      ) : (
        props.promotions.map(promotion => {
          return <PromotionsListItem key={promotion.id} {...promotion} />;
        })
      )}
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    promotions: state.promotions
  };
};

export default connect(mapStateToProps)(PromotionsList);
