import React from 'react';
import { connect } from 'react-redux';

const ContactsListItem = props => (
  <div className="list-item">
    <div>
      <h3 className="list-item__title">
        {props.contact.name} - {props.contact.email}
      </h3>
      {props.contact.phone ? (
        <p className="list-item__sub-title">Telefone: {props.contact.phone}</p>
      ) : (
        ''
      )}
      <p className="list-item__sub-title">Mensagem: {props.contact.message}</p>
    </div>
    <button className="button" onClick={() => props.onRead(props.contact)}>
      Marcar como Lido
    </button>
  </div>
);

export default ContactsListItem;
