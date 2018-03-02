import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import CategoryAdminPage from '../components/CategoryAdminPage';
import CategoryAddPage from '../components/CategoryAddPage';
import CategoryEditPage from '../components/CategoryEditPage';
import ProductAdminPage from '../components/ProductAdminPage';
import ProductAddPage from '../components/ProductAddPage';
import ProductEditPage from '../components/ProductEditPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute
          path="/category"
          component={CategoryAdminPage}
          exact={true}
        />
        <PrivateRoute path="/category/create" component={CategoryAddPage} />
        <PrivateRoute path="/category/edit/:id" component={CategoryEditPage} />
        <PrivateRoute
          path="/product"
          component={ProductAdminPage}
          exact={true}
        />
        <PrivateRoute path="/product/create" component={ProductAddPage} />
        <PrivateRoute path="/product/edit/:id" component={ProductEditPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
