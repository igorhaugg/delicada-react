const companiesReducerDefaultState = [];

const companiesReducer = (state = companiesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_COMPANY':
      return [...state, action.company];
    case 'REMOVE_COMPANY':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_COMPANY':
      return state.map(company => {
        if (company.id === action.id) {
          return {
            ...company,
            ...action.updates
          };
        } else {
          return company;
        }
      });
    case 'SET_COMPANIES':
      return action.companies;
    default:
      return state;
  }
};

export default companiesReducer;
