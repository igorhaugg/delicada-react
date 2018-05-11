import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export const PromotionsSummary = ({ promotionCount }) => {
  const promotionWord = promotionCount === 1 ? 'promoção' : 'promoções';
  const registerWord = promotionCount === 1 ? 'cadastrada' : 'cadastradas';

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          <span>{promotionCount}</span> {promotionWord} {registerWord}
        </h1>
        <div className="page-header__actions">
          <Link className="button" to="/admin/promotions/create">
            Adicionar
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    promotionCount: state.promotions.length
  };
};

export default connect(mapStateToProps)(PromotionsSummary);
