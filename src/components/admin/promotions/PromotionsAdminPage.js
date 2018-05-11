import React from 'react';

import PromotionsList from './PromotionsList';
import PromotionsSummary from './PromotionsSummary';
import MenuAdmin from '../MenuAdmin';

const PromotionsAdminPage = () => (
  <main className="dashboard">
    <MenuAdmin />
    <section className="dashboard__content">
      <PromotionsSummary />
      <PromotionsList />
    </section>
  </main>
);

export default PromotionsAdminPage;
