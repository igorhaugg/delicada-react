import React from 'react';
import SalesList from './SalesList';
import SalesListFilters from './SalesListFilters';
import SalesSummary from './SalesSummary';
import MenuAdmin from '../MenuAdmin';

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
