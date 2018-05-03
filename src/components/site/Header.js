import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCategoryFilter } from '../../actions/filters';

const Header = props => {
  const iconLogged = props.isAuthenticated ? 'fas fa-home' : 'fas fa-lock';
  const onCategoryChange = id => {
    if (id) {
      props.setCategoryFilter(id);
    }
  };
  return (
    <header className="header">
      <ul className="header__nav">
        <Link to="/">
          <li className="header__option">Início</li>
        </Link>
        <Link to="/products">
          <li className="header__option dropdown">
            Produtos <i className="fas fa-angle-down" />
            <ul className="header__dropdown">
              {props.categories.map(category => (
                <li
                  onClick={() => onCategoryChange(category.id)}
                  key={category.id}
                >
                  {category.name}
                </li>
              ))}
            </ul>
          </li>
        </Link>
        <Link to="/">
          <li className="header__option">Contato</li>
        </Link>
        <Link to="/">
          <li className="header__option">Sobre</li>
        </Link>
      </ul>
    </header>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid,
  categories: state.categories
});

const mapDispatchToProps = dispatch => ({
  setCategoryFilter: category => dispatch(setCategoryFilter(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);