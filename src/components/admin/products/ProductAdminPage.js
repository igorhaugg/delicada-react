import React from 'react';

import MenuAdmin from '../MenuAdmin';
import ProductList from './ProductList';
import ProductsSummary from './ProductsSummary';

const ProductAdminPage = () => (
  <main className="dashboard">
    <MenuAdmin />
    <section className="dashboard__content">
      <ProductsSummary />
      <ProductList />
    </section>
  </main>
);

export default ProductAdminPage;
