import database from '../firebase/firebase';
import firebase from 'firebase';

export const addContact = contact => ({
  type: 'ADD_CONTACT',
  contact
});

export const startAddContact = (contactData = {}) => {
  return (dispatch, getState) => {
    const {
      name = '',
      email = '',
      phone = '',
      message = '',
      read = 'false',
      createdAt = 0
    } = contactData;
    const contact = { name, email, phone, message, read, createdAt };

    return database
      .ref(`contacts`)
      .push(contact)
      .then(ref => {
        dispatch(
          addContact({
            id: ref.key,
            ...contact
          })
        );
      });
  };
};

export const removeContact = ({ id } = {}) => ({
  type: 'REMOVE_CONTACT',
  id
});

export const startRemoveContact = ({ id } = {}) => {
  return (dispatch, getState) => {
    return database
      .ref(`contacts/${id}`)
      .remove()
      .then(() => {
        dispatch(removeContact({ id }));
      });
  };
};

export const editContact = (id, updates) => ({
  type: 'EDIT_CONTACT',
  id,
  updates
});

export const startEditContact = (id, updates) => {
  return (dispatch, getState) => {
    return database
      .ref(`contacts/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editContact(id, updates));
      });
  };
};

export const setContacts = contacts => ({
  type: 'SET_CONTACTS',
  contacts
});

export const startSetContacts = () => {
  return (dispatch, getState) => {
    return database
      .ref(`contacts`)
      .once('value')
      .then(snapshot => {
        const contacts = [];

        snapshot.forEach(childSnapshot => {
          contacts.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });

        dispatch(setContacts(contacts));
      });
  };
};
