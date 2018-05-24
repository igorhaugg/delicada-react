import React from 'react';
import Breadcrumbs from '../Breadcrumbs';
import ProductListFilters from './ProductListFilters';
import ProductList from './ProductList';

const MainContent = () => {
  return (
    <main className="wrapper">
      <Breadcrumbs route="/produtos" title="Produtos" />
      <ProductListFilters />
      <ProductList />
    </main>
  );
};

export default MainContent;
