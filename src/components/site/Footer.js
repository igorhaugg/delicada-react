import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCategoryFilter } from '../../actions/filters';

const Footer = props => {
  // const iconLogged = props.isAuthenticated ? 'fas fa-home' : 'fas fa-lock';
  const onCategoryChange = id => {
    if (id) {
      props.setCategoryFilter(id);
    }
  };
  return (
    <footer>
      <div className="footer wrapper">
        <div className="footer__links">
          <span className="footer__title">Mais Informações</span>
          <ul className="footer__list">
            <li>
              <Link to="/" className="color-link">
                <i className="fas fa-angle-right" /> Início
              </Link>
            </li>
            <li className="color-link">
              <i className="fas fa-angle-right" /> Formas de Pagamento
              <ul className="sub-link">
                <li className="color-link">- Cartão de Crédito</li>
                <li className="color-link">- Dinheiro</li>
              </ul>
            </li>
            <li>
              <Link to="/sobre" className="color-link">
                <i className="fas fa-angle-right" /> Sobre
              </Link>
            </li>
            <li>
              <Link to="/login" className="color-link">
                <i className="fas fa-angle-right" /> Login
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__products">
          <span className="footer__title">Produtos</span>
          <ul className="footer__list">
            {props.categories.map(category => (
              <li
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
              >
                <Link to="/produtos" className="color-link">
                  <i className="fas fa-angle-right" />
                  &nbsp;
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__contact">
          <span className="footer__title">Contato</span>
          <ul className="footer__list">
            <li className="color-link">
              <i className="fab fa-whatsapp" /> 55 99112-9608
            </li>

            <Link to="/contato" className="color-link">
              <i className="fas fa-envelope" /> Email
            </Link>

            <li className="color-link">
              <i className="fas fa-location-arrow" /> Ijuí - RS
            </li>
          </ul>
        </div>
      </div>

      <div className="copyright wrapper">
        <div className="copyright__border">
          <span className="color-link">Copyright 2018</span>
          <span className="copyright__names">
            <a href="https://igorhaugg.github.io/portfolio/" target="_blank">
              Igor Haugg&nbsp;
            </a>
            <span className="color-link">e</span>
            <a
              href="https://marciadasilva.github.io/portfolio/"
              target="_blank"
            >
              &nbsp;Márcia da Silva
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid,
  categories: state.categories
});

const mapDispatchToProps = dispatch => ({
  setCategoryFilter: category => dispatch(setCategoryFilter(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
