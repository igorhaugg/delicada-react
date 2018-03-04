export default products => {
  return products
    .map(product => product.price_sell)
    .reduce((sum, value) => sum + value, 0);
};
