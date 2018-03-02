import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import categoriesReducer from '../reducers/categories';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';
import productsReducer from '../reducers/products';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      categories: categoriesReducer,
      filters: filtersReducer,
      products: productsReducer,
      auth: authReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
