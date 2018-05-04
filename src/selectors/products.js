import moment from 'moment';

const getVisibleProducts = (products, { text, sortBy }) => {
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
        } else if (sortBy === 'price') {
          return a.price_sell < b.price_sell ? -1 : 1;
        } else if (sortBy === 'price-reverse') {
          return a.price_sell > b.price_sell ? 1 : -1;
        } else if (sortBy === 'name') {
          return a.name > b.name ? -1 : 1;
        }
      })
  );
};

export default getVisibleProducts;
