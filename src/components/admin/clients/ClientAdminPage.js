import React from 'react';
import ClientList from './ClientList';
import ClientListFilters from './ClientListFilters';
import ClientsSummary from './ClientsSummary';
import MenuAdmin from '../MenuAdmin';

const ClientAdminPage = () => (
  <main className="dashboard">
    <MenuAdmin />
    <section className="dashboard__content">
      <ClientsSummary />
      <ClientListFilters />
      <ClientList />
    </section>
  </main>
);

export default ClientAdminPage;
