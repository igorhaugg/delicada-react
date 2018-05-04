import React from 'react';
import { connect } from 'react-redux';
import ContactsListItem from './ContactsListItem';
import selectContacts from '../../../selectors/contacts';
import { startEditContact } from '../../../actions/contacts';

export class ContactsList extends React.Component {
  onRead = contact => {
    let con = { read: 'true' };
    this.props.startEditContact(contact.id, con);
  };
  render() {
    return (
      <div className="content-container">
        <div className="list-header">
          <div className="show-for-mobile">Contacts</div>
          <div className="show-for-desktop">Contact</div>
        </div>
        <div className="list-body">
          {this.props.contacts.length === 0 ? (
            <div className="list-item list-item--message">
              <span>No contacts</span>
            </div>
          ) : (
            this.props.contacts.map(contact => {
              return (
                <ContactsListItem
                  key={contact.id}
                  contact={contact}
                  onRead={this.onRead}
                />
              );
            })
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: selectContacts(state.contacts, state.filters)
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  startEditContact: (id, contact) => dispatch(startEditContact(id, contact))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
