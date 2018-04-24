import React from 'react';
import ProductList from './ProductList';
import ProductListFilters from './ProductListFilters';
import ProductsSummary from './ProductsSummary';
import MenuAdmin from '../MenuAdmin';

const ProductAdminPage = () => (
  <main className="dashboard">
    <MenuAdmin />
    <section className="dashboard__content">
      <ProductsSummary />
      {/* <ProductListFilters /> */}
      <ProductList />
    </section>
  </main>
);

export default ProductAdminPage;
