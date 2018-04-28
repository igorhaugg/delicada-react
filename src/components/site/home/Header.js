import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = props => {
  const iconLogged = props.isAuthenticated ? 'fas fa-home' : 'fas fa-lock';
  return (
    <header className="header">
      <ul className="header__options">
        <li>Home</li>
        <li>Products</li>
        <li>Contact</li>
      </ul>

      <ul className="header__sociais">
        <li>
          <a className="header__sociais__link" href="">
            <i className="fab fa-facebook-square" />
          </a>
        </li>
        <li>
          <a className="header__sociais__link" href="">
            <i className="fab fa-instagram" />
          </a>
        </li>
        <li>
          <Link to="/login" className="header__sociais__link">
            <i className={iconLogged} />
          </Link>
        </li>
      </ul>
    </header>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(Header);
