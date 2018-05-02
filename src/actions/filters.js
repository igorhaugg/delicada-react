export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

export const setCategoryFilter = (category = '') => ({
  type: 'SET_CATEGORY_FILTER',
  category
});

export const setProductFilter = (product = '') => ({
  type: 'SET_PRODUCT_FILTER',
  product
});

export const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

export const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

export const sortByPrice = () => ({
  type: 'SORT_BY_PRICE'
});

export const sortByName = () => ({
  type: 'SORT_BY_NAME'
});

export const setStartDate = startDate => ({
  type: 'SET_START_DATE',
  startDate
});

export const setEndDate = endDate => ({
  type: 'SET_END_DATE',
  endDate
});
