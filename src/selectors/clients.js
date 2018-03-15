import moment from 'moment';

const getVisibleClients = (clients, { text, sortBy, startDate, endDate }) => {
  return clients
    .filter(client => {
      // const createdAtMoment = moment(client.createdAt);
      // const startDateMatch = startDate
      //   ? startDate.isSameOrBefore(createdAtMoment, 'day')
      //   : true;
      // const endDateMatch = endDate
      //   ? endDate.isSameOrAfter(createdAtMoment, 'day')
      //   : true;
      const textMatch = client.name.toLowerCase().includes(text.toLowerCase());

      return textMatch;
      // return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'name') {
        return a.name > b.name ? 1 : -1;
      }
    });
};

export default getVisibleClients;
