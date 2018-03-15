import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const MenuAdmin = () => (
  <aside className="dashboard__menu">
    <div className="menu">
      <div className="menu__items">
        {/* <img className="button__image" src="/images/favicon.png" /> */}
        <Link
          to="/dashboard"
          className={classNames({ active: location.pathname === '/dashboard' })}
        >
          <i className="fas fa-home" /> Home
        </Link>
        <Link
          to="/category"
          className={classNames({ active: location.pathname === '/category' })}
        >
          <i className="far fa-list-alt" /> Categories
        </Link>
        <Link
          to="/product"
          className={classNames({ active: location.pathname === '/product' })}
        >
          <i className="far fa-list-alt" /> Products
        </Link>
        <Link
          to="/client"
          className={classNames({ active: location.pathname === '/client' })}
        >
          <i className="fas fa-users" /> Clients
        </Link>
        <Link
          to="/company"
          className={classNames({ active: location.pathname === '/company' })}
        >
          <i className="fas fa-info-circle" /> Company
        </Link>
        <Link
          to="/"
          className={classNames({ active: location.pathname === '/messages' })}
        >
          <i className="fas fa-comment-alt flip" />
          Messages
        </Link>
      </div>
      <div className="menu__items">
        <Link to="create">
          <i className="fas fa-question-circle" /> Help
        </Link>
      </div>
    </div>
  </aside>
);

export default MenuAdmin;
