import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import selectCompany from '../../selectors/company';
import { startLogout } from '../../actions/auth';

export class MenuAdmin extends React.Component {
  render() {
    return (
      <aside className="dashboard__menu">
        <div className="menu">
          <div className="menu__items">
            <div className="menu__header">
              <h3 className="menu__title">
                <Link to="/">
                  {this.props.company[0] && this.props.company[0].name
                    ? this.props.company[0].name
                    : 'Nome da Empresa'}
                </Link>
              </h3>
              <div className="menu_header--user">
                <Link to="/admin/company">
                  <img
                    className="button__image"
                    src={
                      this.props.company[0] && this.props.company[0].image
                        ? this.props.company[0].image
                        : '/images/default-user.png'
                    }
                  />
                </Link>
                <span>
                  {this.props.company[0] && this.props.company[0].owner
                    ? this.props.company[0].owner
                    : 'Usuário'}
                </span>
              </div>
            </div>
            <Link
              to="/admin"
              className={classNames({
                active:
                  location.pathname === '/admin/' ||
                  location.pathname === '/admin'
              })}
            >
              <i className="fas fa-home" /> <span>Início</span>
            </Link>
            <Link
              to="/admin/dashboard"
              className={classNames({
                active: location.pathname.includes('dashboard')
              })}
            >
              <i className="fas fa-chart-line" /> <span>Resumo</span>
            </Link>
            <Link
              to="/admin/category"
              className={classNames({
                active: location.pathname.includes('category')
              })}
            >
              <i className="far fa-list-alt" /> <span>Categorias</span>
            </Link>
            <Link
              to="/admin/product"
              className={classNames({
                active: location.pathname.includes('product')
              })}
            >
              <i className="far fa-list-alt" /> <span>Produtos</span>
            </Link>
            <Link
              to="/admin/client"
              className={classNames({
                active: location.pathname.includes('client')
              })}
            >
              <i className="fas fa-users" /> <span>Clientes</span>
            </Link>
            <Link
              to="/admin/sales"
              className={classNames({
                active: location.pathname.includes('sales')
              })}
            >
              <i className="fas fa-shopping-cart" /> <span>Vendas</span>
            </Link>
            <Link
              to="/admin/company"
              className={classNames({
                active: location.pathname.includes('company')
              })}
            >
              <i className="fas fa-info-circle" /> <span>Empresa</span>
            </Link>
            <Link
              to="/admin/contacts"
              className={classNames({
                active: location.pathname.includes('contacts')
              })}
            >
              <i className="fas fa-comment-alt flip" />
              <span>Mensagens</span>
            </Link>

            <Link
              to="/admin/help"
              className={classNames({
                active: location.pathname.includes('help')
              })}
            >
              <i className="fas fa-question-circle" /> <span>Ajuda</span>
            </Link>
            <Link to="/login" onClick={this.props.startLogout}>
              <i className="fas fa-sign-out-alt" /> <span>Sair</span>
            </Link>
          </div>
        </div>
      </aside>
    );
  }
}

const mapStateToProps = state => {
  return {
    company: Array.from(selectCompany(state.company, state.filters))
  };
};

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuAdmin);
