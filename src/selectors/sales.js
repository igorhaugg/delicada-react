import moment from 'moment';

const getVisibleSales = (
  sales,
  { text, sortBy, startDate, endDate },
  clients
) => {
  return sales
    .filter(sale => {
      if (sale.status === 'open') {
        const createdAtMoment = moment(sale.createdAt);
        const startDateMatch = startDate
          ? startDate.isSameOrBefore(createdAtMoment, 'day')
          : true;
        const endDateMatch = endDate
          ? endDate.isSameOrAfter(createdAtMoment, 'day')
          : true;
        let clientName = '';
        let textMatch = true;
        if (clients) {
          clientName = clients.filter(client => client.id === sale.client_id);
        }
        if (clientName) {
          textMatch = clientName[0].name
            .toLowerCase()
            .includes(text.toLowerCase());
        }
        return startDateMatch && endDateMatch && textMatch;
      }
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'name') {
        return a.name > b.name ? 1 : -1;
      }
    });
};

export default getVisibleSales;
