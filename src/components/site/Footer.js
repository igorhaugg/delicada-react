import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Footer = props => {
  const iconLogged = props.isAuthenticated ? 'fas fa-home' : 'fas fa-lock';
  return (
    <header className="footer">
      <ul className="footer__sociais">
        <li>
          <a className="footer__sociais__link" href="">
            <i className="fab fa-facebook-square" />
          </a>
        </li>
        <li>
          <a className="footer__sociais__link" href="">
            <i className="fab fa-instagram" />
          </a>
        </li>
        <li>
          <Link to="/login" className="footer__sociais__link">
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

export default connect(mapStateToProps)(Footer);
