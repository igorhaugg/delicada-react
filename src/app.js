import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetCategories } from './actions/categories';
import { startSetProducts } from './actions/products';
import { startSetClients } from './actions/clients';
import { startSetCompany } from './actions/company';
import { startSetSales } from './actions/sales';
import { startSetContacts } from './actions/contacts';
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css';
import 'animate.css/animate.css';
import './styles/styles.scss';
import 'react-confirm-alert/src/react-confirm-alert.css';
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
    store.dispatch(startSetCategories());
    store.dispatch(startSetSales());
    store.dispatch(startSetContacts());
    store.dispatch(startSetCompany()).then(() => {
      renderApp();
    });
  } else {
    store.dispatch(logout());
    store.dispatch(startSetProducts());
    store.dispatch(startSetCategories());
    store.dispatch(startSetContacts());
    store.dispatch(startSetCompany()).then(() => {
      renderApp();
    });
    // history.push('/login');
  }
});
