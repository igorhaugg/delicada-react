import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../../actions/auth';

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="header__content">
      <Link className="header__title" to="/dashboard">
        <h1>Delicada Mulher</h1>
      </Link>
      <button
        className="button button--link button__profile"
        onClick={startLogout}
      >
        <img className="button__image" src="/images/favicon.png" />
        Logout
      </button>
    </div>
  </header>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
