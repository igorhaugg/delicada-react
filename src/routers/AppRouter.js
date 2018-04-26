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
import SalesAdminPage from '../components/admin/sales/SalesAdminPage';
import SalesAddPage from '../components/admin/sales/SalesAddPage';
// import ClientEditPage from '../components/admin/clients/ClientEditPage';
import CompanyAdminPage from '../components/admin/companies/CompanyAdminPage';
import MessageAdminPage from '../components/admin/messages/MessageAdminPage';
import HelpAdminPage from '../components/admin/help/HelpAdminPage';
import IndexPage from '../components/site/home/IndexPage';
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
        <PrivateRoute path="/admin" component={HomePage} exact={true} />
        <PrivateRoute path="/admin/dashboard" component={DashboardPage} />
        <PrivateRoute
          path="/admin/category"
          component={CategoryAdminPage}
          exact={true}
        />
        <PrivateRoute
          path="/admin/category/create"
          component={CategoryAddPage}
        />
        <PrivateRoute
          path="/admin/category/edit/:id"
          component={CategoryEditPage}
        />
        <PrivateRoute
          path="/admin/product"
          component={ProductAdminPage}
          exact={true}
        />
        <PrivateRoute path="/admin/product/create" component={ProductAddPage} />
        <PrivateRoute
          path="/admin/product/edit/:id"
          component={ProductEditPage}
        />
        <PrivateRoute
          path="/admin/client"
          component={ClientAdminPage}
          exact={true}
        />
        <PrivateRoute path="/admin/client/create" component={ClientAddPage} />
        <PrivateRoute
          path="/admin/client/edit/:id"
          component={ClientEditPage}
        />
        <PrivateRoute
          path="/admin/sales"
          component={SalesAdminPage}
          exact={true}
        />
        <PrivateRoute path="/admin/sales/create" component={SalesAddPage} />
        {/* <PrivateRoute path="/admin/client/edit/:id" component={ClientEditPage} /> */}
        <PrivateRoute
          path="/admin/company"
          component={CompanyAdminPage}
          exact={true}
        />
        <PublicRoute
          path="/admin/messages"
          component={MessageAdminPage}
          exact={true}
        />
        <PublicRoute
          path="/admin/help"
          component={HelpAdminPage}
          exact={true}
        />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
