import React from 'react';

import ClientList from './ClientList';
import ClientListFilters from './ClientListFilters';
import ClientsSummary from './ClientsSummary';
import MenuAdmin from '../MenuAdmin';

class ClientAdminPage extends React.Component {
  componentDidMount() {
    document.title = 'Delicada Mulher - Clientes';
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 2);
  }
  render() {
    return (
      <main className="dashboard">
        <MenuAdmin />
        <section className="dashboard__content">
          <ClientsSummary />
          <ClientListFilters />
          <ClientList />
        </section>
      </main>
    );
  }
}

export default ClientAdminPage;
