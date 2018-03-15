import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { startLogout } from '../../actions/auth';

export const MenuAdmin = ({ startLogout }) => (
  <aside className="dashboard__menu">
    <div className="menu">
      <div className="menu__items">
        <div className="menu__header">
          <h3>Delicada Mulher</h3>
          <div className="menu_header--user">
            <img className="button__image" src="/images/favicon.png" />
            <span>Priscila</span>
          </div>
        </div>
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
        <Link to="/">
          <i className="fas fa-question-circle" /> Help
        </Link>
        <Link to="/" onClick={startLogout}>
          <i className="fas fa-sign-out-alt" /> Logout
        </Link>
      </div>
    </div>
  </aside>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(MenuAdmin);
