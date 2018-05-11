import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import selectContacts from '../../../selectors/contacts';

export const ContactsSummary = ({ contactCount }) => {
  const contactWord = contactCount === 1 ? 'mensagem' : 'mensagens';
  const readWord = contactCount === 1 ? 'lida' : 'lidas';

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          <span>{contactCount}</span> {contactWord} não {readWord}
        </h1>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const visibleContacts = selectContacts(state.contacts, state.filters);

  return {
    contactCount: visibleContacts.length
  };
};

export default connect(mapStateToProps)(ContactsSummary);
