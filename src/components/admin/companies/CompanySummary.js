import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

export const CompanySummary = () => {
  return (
    <div className="page-header">
      <div className="content-container--company">
        <h1 className="page-header__title">Delicada Mulher</h1>
        <div className="page-header__owner">
          <img className="button__image" src="/images/favicon.png" />
          Owner Name
        </div>
      </div>
    </div>
  );
};

export default CompanySummary;
