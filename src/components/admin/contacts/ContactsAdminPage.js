import React from 'react';

import MenuAdmin from '../MenuAdmin';
import ContactsSummary from './ContactsSummary';
import ContactsList from './ContactsList';

class ContactsAdminPage extends React.Component {
  componentDidMount() {
    document.title = 'Delicada Mulher - Mensagens';
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 2);
  }
  render() {
    return (
      <main className="dashboard">
        <MenuAdmin />
        <section className="dashboard__content">
          <ContactsSummary />
          <ContactsList />
        </section>
      </main>
    );
  }
}

export default ContactsAdminPage;
