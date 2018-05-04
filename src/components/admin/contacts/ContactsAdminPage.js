import React from 'react';
import MenuAdmin from '../MenuAdmin';
import ContactsSummary from './ContactsSummary';
import ContactsList from './ContactsList';

const ContactsAdminPage = () => (
  <main className="dashboard">
    <MenuAdmin />
    <section className="dashboard__content">
      <ContactsSummary />
      <ContactsList />
    </section>
  </main>
);

export default ContactsAdminPage;
