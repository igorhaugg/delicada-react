export default categories => {
  return categories
    .map(category => category.amount)
    .reduce((sum, value) => sum + value, 0);
};
