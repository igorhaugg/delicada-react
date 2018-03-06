import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetCategories } from './actions/categories';
import { startSetProducts } from './actions/products';
import { startSetClients } from './actions/clients';
import { login, logout } from './actions/auth';
import getVisibleCategories from './selectors/categories';
import getVisibleProducts from './selectors/products';
import getVisibleClients from './selectors/clients';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetProducts());
    store.dispatch(startSetClients());
    store.dispatch(startSetCategories()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/category');
      }
    });
    // store.dispatch(startSetProducts()).then(() => {
    //   renderApp();
    //   if (history.location.pathname === '/') {
    //     history.push('/product');
    //   }
    // });
    // store.dispatch(startSetClients()).then(() => {
    //   renderApp();
    //   if (history.location.pathname === '/') {
    //     history.push('/client');
    //   }
    // });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});