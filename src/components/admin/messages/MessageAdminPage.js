import React from 'react';
import MenuAdmin from '../MenuAdmin';

const MessageAdminPage = () => (
  <main className="dashboard">
    <MenuAdmin />
    <section className="dashboard__content">
      <div className="help__content">
        <img
          className="dashboard__image-home"
          src="/images/dashboard.jpg"
          alt="dashboard background"
        />
      </div>
    </section>
  </main>
);

export default MessageAdminPage;
