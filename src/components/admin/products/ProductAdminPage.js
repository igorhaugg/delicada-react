import React from 'react';

import MenuAdmin from '../MenuAdmin';
import ProductList from './ProductList';
import ProductsSummary from './ProductsSummary';

class ProductAdminPage extends React.Component {
  componentDidMount() {
    document.title = 'Delicada Mulher - Produtos';
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 2);
  }
  render() {
    return (
      <main className="dashboard">
        <MenuAdmin />
        <section className="dashboard__content dashboard__scroll">
          <ProductsSummary />
          <ProductList />
        </section>
      </main>
    );
  }
}
export default ProductAdminPage;
