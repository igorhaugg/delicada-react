import moment from 'moment';

const getVisibleProducts = (
  products,
  { text, category, sortBy, startDate, endDate }
) => {
  return products
    .filter(product => {
      if (product.amount > 0) {
        const textMatch = product.name
          .toLowerCase()
          .includes(text.toLowerCase());
        return textMatch;
      }
    })
    .filter(product => {
      if (category && (category !== 'default' && category !== 'all')) {
        return product.category_id === category;
      } else {
        return product;
      }
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
      } else if (sortBy === 'price') {
        return a.price_sell < b.price_sell ? 1 : -1;
      } else if (sortBy === 'name') {
        return a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1;
      }
    });
};

export default getVisibleProducts;
