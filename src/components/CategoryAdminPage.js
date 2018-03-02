import React from 'react';
import CategoryList from './CategoryList';
import CategoryListFilters from './CategoryListFilters';
import CategoriesSummary from './CategoriesSummary';
import MenuAdmin from './MenuAdmin';

const CategoryAdminPage = () => (
  <main className="dashboard">
    <MenuAdmin />
    <section className="dashboard__content">
      <CategoriesSummary />
      <CategoryListFilters />
      <CategoryList />
    </section>
  </main>
);

export default CategoryAdminPage;
