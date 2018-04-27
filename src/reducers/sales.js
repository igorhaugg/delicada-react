const salesReducerDefaultState = [];

const salesReducer = (state = salesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_SALE':
      return [...state, action.sale];
    case 'REMOVE_SALE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_SALE':
      return state.map(sale => {
        if (sale.id === action.id) {
          return {
            ...sale,
            ...action.updates
          };
        } else {
          return sale;
        }
      });
    case 'SET_SALES':
      return action.sales;
    default:
      return state;
  }
};

export default salesReducer;
