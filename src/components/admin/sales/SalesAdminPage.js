import React from 'react';

import MenuAdmin from '../MenuAdmin';
import SalesList from './SalesList';
import SalesListFilters from './SalesListFilters';
import SalesSummary from './SalesSummary';

const SalesAdminPage = () => (
  <main className="dashboard">
    <MenuAdmin />
    <section className="dashboard__content">
      <SalesSummary />
      <SalesListFilters />
      <SalesList />
    </section>
  </main>
);

export default SalesAdminPage;
