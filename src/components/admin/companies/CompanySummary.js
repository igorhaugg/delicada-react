import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectCompany from '../../../selectors/company';

export const CompanySummary = props => {
  return (
    <div className="page-header">
      <div className="content-container--company">
        <h1 className="page-header__title">
          {props.company[0] && props.company[0].name
            ? props.company[0].name
            : 'Company Name'}
        </h1>
        <div className="page-header__owner">
          <img
            className="button__image"
            src={
              props.company[0] && props.company[0].image
                ? props.company[0].image
                : '/images/default-user.png'
            }
          />
          {props.company[0] && props.company[0].owner
            ? props.company[0].owner
            : 'Owner Name'}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const company = selectCompany(state.company, state.filters);
  return {
    company
  };
};

export default connect(mapStateToProps)(CompanySummary);
