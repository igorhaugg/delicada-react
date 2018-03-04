import React from 'react';
import MenuAdmin from './MenuAdmin';

const DashboardPage = () => (
  <main className="dashboard">
    <MenuAdmin />
    <section className="dashboard__content" />
  </main>
);

export default DashboardPage;
