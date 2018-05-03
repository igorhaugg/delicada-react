const getVisibleProducts = (products, filters) => {
  return products.filter(p => p.id === filters.product);
};

export default getVisibleProducts;
