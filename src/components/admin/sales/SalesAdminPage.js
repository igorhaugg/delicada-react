import React from 'react';
// import CategoryList from './CategoryList';
// import CategoryListFilters from './CategoryListFilters';
import SalesSummary from './SalesSummary';
import MenuAdmin from '../MenuAdmin';

const SalesAdminPage = () => (
  <main className="dashboard">
    <MenuAdmin />
    <section className="dashboard__content">
      <SalesSummary />
      {/* <CategoryListFilters /> */}
      {/* <CategoryList /> */}
    </section>
  </main>
);

export default SalesAdminPage;
