import moment from 'moment';

const getVisibleProducts = (products, { text, sortBy, startDate, endDate }) => {
  return (
    products
      // .filter(product => {
      //   const createdAtMoment = moment(product.createdAt);
      //   const startDateMatch = startDate
      //     ? startDate.isSameOrBefore(createdAtMoment, 'day')
      //     : true;
      //   const endDateMatch = endDate
      //     ? endDate.isSameOrAfter(createdAtMoment, 'day')
      //     : true;
      //   const textMatch = product.name.toLowerCase().includes(text.toLowerCase());
      //
      //   return startDateMatch && endDateMatch && textMatch;
      // })
      .sort((a, b) => {
        if (sortBy === 'date') {
          return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
          return a.amount < b.amount ? 1 : -1;
        } else if (sortBy === 'name') {
          return a.name > b.name ? 1 : -1;
        }
      })
  );
};

export default getVisibleProducts;
