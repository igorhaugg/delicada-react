const promotionsReducerDefaultState = [];

const promotionsReducer = (state = promotionsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_PROMOTION':
      return [...state, action.promotion];
    case 'REMOVE_PROMOTION':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_PROMOTION':
      return state.map(promotion => {
        if (promotion.id === action.id) {
          return {
            ...promotion,
            ...action.updates
          };
        } else {
          return promotion;
        }
      });
    case 'SET_PROMOTIONS':
      return action.promotions;
    default:
      return state;
  }
};

export default promotionsReducer;
