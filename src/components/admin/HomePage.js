import React from 'react';

import MenuAdmin from './MenuAdmin';

class HomePage extends React.Component {
  componentDidMount() {
    document.title = 'Delicada Mulher - Admin';
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 2);
  }
  componentWillUnmount() {
    document.title = 'Delicada Mulher';
  }
  render() {
    return (
      <main className="dashboard">
        <MenuAdmin />
        <section className="dashboard__content">
          <img
            className="dashboard__image-home"
            src="/images/dashboard.jpg"
            alt="dashboard background"
          />
        </section>
      </main>
    );
  }
}

export default HomePage;
