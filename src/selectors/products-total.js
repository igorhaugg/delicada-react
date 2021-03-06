export default products => {
  return products
    .map(product => product.price_sell * product.amount)
    .reduce((sum, value) => sum + value, 0);
};
