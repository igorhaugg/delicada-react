import moment from 'moment';

const getVisibleContacts = (contacts, { text, sortBy, startDate, endDate }) => {
  return contacts.filter(contact => contact.read === 'false').sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'name') {
      return a.name > b.name ? 1 : -1;
    }
  });
};

export default getVisibleContacts;
