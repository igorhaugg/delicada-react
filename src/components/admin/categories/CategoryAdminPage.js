import React from 'react';

import CategoryList from './CategoryList';
import CategoriesSummary from './CategoriesSummary';
import MenuAdmin from '../MenuAdmin';

const CategoryAdminPage = () => (
  <main className="dashboard">
    <MenuAdmin />
    <section className="dashboard__content">
      <CategoriesSummary />
      <CategoryList />
    </section>
  </main>
);

export default CategoryAdminPage;
