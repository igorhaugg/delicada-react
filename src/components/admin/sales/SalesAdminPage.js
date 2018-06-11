import React from 'react';

import MenuAdmin from '../MenuAdmin';
import SalesList from './SalesList';
import SalesListFilters from './SalesListFilters';
import SalesSummary from './SalesSummary';

class SalesAdminPage extends React.Component {
  componentDidMount() {
    document.title = 'Delicada Mulher - Vendas';
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 2);
  }
  render() {
    return (
      <main className="dashboard">
        <MenuAdmin />
        <section className="dashboard__content">
          <SalesSummary />
          <SalesListFilters />
          <SalesList />
        </section>
      </main>
    );
  }
}

export default SalesAdminPage;
