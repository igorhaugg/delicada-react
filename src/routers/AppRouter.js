import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/admin/DashboardPage';
import HomePage from '../components/admin/HomePage';
import CategoryAdminPage from '../components/admin/categories/CategoryAdminPage';
import CategoryAddPage from '../components/admin/categories/CategoryAddPage';
import CategoryEditPage from '../components/admin/categories/CategoryEditPage';
import ProductAdminPage from '../components/admin/products/ProductAdminPage';
import ProductAddPage from '../components/admin/products/ProductAddPage';
import ProductEditPage from '../components/admin/products/ProductEditPage';
import ClientAdminPage from '../components/admin/clients/ClientAdminPage';
import ClientAddPage from '../components/admin/clients/ClientAddPage';
import ClientEditPage from '../components/admin/clients/ClientEditPage';
import CompanyAdminPage from '../components/admin/companies/CompanyAdminPage';
import HelpPage from '../components/admin/HelpPage';
import IndexPage from '../components/site/IndexPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import SpecialRoute from './SpecialRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={IndexPage} exact={true} />
        <SpecialRoute path="/login" component={LoginPage} />
        <PrivateRoute path="/home" component={HomePage} />
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
        <PrivateRoute path="/client" component={ClientAdminPage} exact={true} />
        <PrivateRoute path="/client/create" component={ClientAddPage} />
        <PrivateRoute path="/client/edit/:id" component={ClientEditPage} />
        <PrivateRoute
          path="/company"
          component={CompanyAdminPage}
          exact={true}
        />
        <PublicRoute path="/help" component={HelpPage} exact={true} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
