const getId = (products, categories, { text, sortBy, startDate, endDate }) => {
  return categories
    .map(category => {
      let count = 0;
      for (let i = 0; i < products.length; i++) {
        if (category.id === products[i].category_id) {
          count = +count + +products[i].amount; // parseInt(count) === +count
          // count++;
        }
      }
      return count;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'name') {
        return a.name > b.name ? 1 : -1;
      }
    });
};

export default getId;
