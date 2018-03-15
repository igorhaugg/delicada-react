import React from 'react';
import { connect } from 'react-redux';
import CompanyForm from './CompanyForm';
import { startAddCompany } from '../../../actions/company';
import MenuAdmin from '../MenuAdmin';
import selectCompany from '../../../selectors/company';

export class CompanyInfo extends React.Component {
  onSubmit = company => {
    this.props.startAddCompany(company);
    // this.props.history.push('/company');
  };
  render() {
    return (
      <div className="dashboard">
        <div className="dashboard__content">
          <div className="content-container">
            <CompanyForm
              company={this.props.company[0]}
              onSubmit={this.onSubmit}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  const company = selectCompany(state.company, state.filters);

  return {
    company: company
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  startAddCompany: company => dispatch(startAddCompany(company))
});

export default connect(mapStateToProps, mapDispatchToProps)(CompanyInfo);
