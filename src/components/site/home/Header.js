import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = props => {
  const iconLogged = props.isAuthenticated ? 'fas fa-home' : 'fas fa-lock';
  return (
    <header>
      <div className="header__name">Delicada Mulher</div>
      <div className="header__options">
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="header__sociais">
        <ul>
          <li>F</li>
          <li>I</li>
          <li>
            <Link to="/login">
              <i className={iconLogged} />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(Header);
