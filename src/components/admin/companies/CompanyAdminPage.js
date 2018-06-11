import React from 'react';

import CompanySummary from './CompanySummary';
import CompanyInfo from './CompanyInfo';
import MenuAdmin from '../MenuAdmin';

class CompanyAdminPage extends React.Component {
  componentDidMount() {
    document.title = 'Delicada Mulher - Empresa';
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 2);
  }
  render() {
    return (
      <main className="dashboard">
        <MenuAdmin />
        <section className="dashboard__content">
          <CompanySummary />
          <CompanyInfo />
        </section>
      </main>
    );
  }
}
export default CompanyAdminPage;
