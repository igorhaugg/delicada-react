export default products => {
  return products
    .map(product => +product.amount)
    .reduce((sum, value) => sum + value, 0);
};
