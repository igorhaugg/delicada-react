import React from 'react';

import PromotionsList from './PromotionsList';
import PromotionsSummary from './PromotionsSummary';
import MenuAdmin from '../MenuAdmin';

class PromotionsAdminPage extends React.Component {
  componentDidMount() {
    document.title = 'Delicada Mulher - Promoções';
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 2);
  }
  render() {
    return (
      <main className="dashboard">
        <MenuAdmin />
        <section className="dashboard__content">
          <PromotionsSummary />
          <PromotionsList />
        </section>
      </main>
    );
  }
}
export default PromotionsAdminPage;
