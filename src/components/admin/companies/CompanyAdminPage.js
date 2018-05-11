import React from 'react';

import CompanySummary from './CompanySummary';
import CompanyInfo from './CompanyInfo';
import MenuAdmin from '../MenuAdmin';

const CompanyAdminPage = () => (
  <main className="dashboard">
    <MenuAdmin />
    <section className="dashboard__content">
      <CompanySummary />
      <CompanyInfo />
    </section>
  </main>
);

export default CompanyAdminPage;
