import moment from 'moment';

const filtersReducerDefaultState = {
  text: '',
  category: '',
  product: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SET_CATEGORY_FILTER':
      return {
        ...state,
        category: action.category
      };
    case 'SET_PRODUCT_FILTER':
      return {
        ...state,
        product: action.product
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };
    case 'SORT_BY_PRICE':
      return {
        ...state,
        sortBy: 'price'
      };
    case 'SORT_BY_NAME':
      return {
        ...state,
        sortBy: 'name'
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};

export default filtersReducer;
