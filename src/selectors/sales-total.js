const getTotalSales = (sales, products) => {
  return sales
    .map(
      sale =>
        products.filter(product => product.id === sale.product_id)[0].price_sell
    )
    .reduce((sum, value) => sum + value, 0);
};

export default getTotalSales;
