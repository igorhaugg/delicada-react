import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Footer = props => {
  const iconLogged = props.isAuthenticated ? 'fas fa-home' : 'fas fa-lock';
  return (
    <footer className="footer wrapper">
      <div className="footer__links">
        <span className="footer__title">Mais Informações</span>
        <div className="footer__column">
          <ul>
            <li>
              <Link to="/" className="color-link">
                <i className="fas fa-home" /> Início
              </Link>
            </li>
            <li>
              <Link to="/about" className="color-link">
                <i className="fas fa-shopping-cart" /> Sobre
              </Link>
            </li>
            <li>
              <Link to="/login" className="color-link">
                <i className={iconLogged} /> Login
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/products" className="color-link">
                <i className="fas fa-shopping-cart" /> Produtos
              </Link>
              <ul>
                {props.categories.map(category => (
                  <li key={category.id} className="color-link">
                    &nbsp; <i className="fas fa-angle-right" />
                    &nbsp;
                    {category.name}
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__brand">
        <span className="footer__title">Formas de Pagamento</span>
        {/* <img className="footer__image" src="/images/logo.png" alt="" /> */}
        <i className="fab fa-cc-mastercard" />
        <i className="fab fa-cc-visa" />
      </div>
      <div className="footer__contact">
        <span className="footer__title">Contato</span>
        <img className="footer__image" src="/images/avatar.png" alt="" />
      </div>
    </footer>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid,
  categories: state.categories
});

export default connect(mapStateToProps)(Footer);
