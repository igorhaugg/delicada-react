import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { startLogout } from '../../actions/auth';
import selectCompany from '../../selectors/company';

export class MenuAdmin extends React.Component {
  render() {
    return (
      <aside className="dashboard__menu">
        <div className="menu">
          <div className="menu__items">
            <div className="menu__header">
              <h3>
                {this.props.company[0] && this.props.company[0].name
                  ? this.props.company[0].name
                  : 'Company Name'}
              </h3>
              <div className="menu_header--user">
                <img
                  className="button__image"
                  src={
                    this.props.company[0] && this.props.company[0].image
                      ? this.props.company[0].image
                      : '/images/default-user.png'
                  }
                />
                <span>
                  {this.props.company[0] && this.props.company[0].owner
                    ? this.props.company[0].owner
                    : 'Owner Name'}
                </span>
              </div>
            </div>
            <Link
              to="/home"
              className={classNames({ active: location.pathname === '/home' })}
            >
              <i className="fas fa-home" /> <span>Home</span>
            </Link>
            <Link
              to="/dashboard"
              className={classNames({
                active: location.pathname === '/dashboard'
              })}
            >
              <i className="fas fa-chart-line" /> <span>Summary</span>
            </Link>
            <Link
              to="/category"
              className={classNames({
                active: location.pathname === '/category'
              })}
            >
              <i className="far fa-list-alt" /> <span>Categories</span>
            </Link>
            <Link
              to="/product"
              className={classNames({
                active: location.pathname === '/product'
              })}
            >
              <i className="far fa-list-alt" /> <span>Products</span>
            </Link>
            <Link
              to="/client"
              className={classNames({
                active: location.pathname === '/client'
              })}
            >
              <i className="fas fa-users" /> <span>Clients</span>
            </Link>
            <Link
              to="/company"
              className={classNames({
                active: location.pathname === '/company'
              })}
            >
              <i className="fas fa-info-circle" /> <span>Company</span>
            </Link>
            <Link
              to="/messages"
              className={classNames({
                active: location.pathname === '/messages'
              })}
            >
              <i className="fas fa-comment-alt flip" />
              <span>Messages</span>
            </Link>
          </div>
          <div className="menu__items">
            <Link
              to="/help"
              className={classNames({
                active: location.pathname === '/help'
              })}
            >
              <i className="fas fa-question-circle" /> <span>Help</span>
            </Link>
            <Link to="/login" onClick={this.props.startLogout}>
              <i className="fas fa-sign-out-alt" /> <span>Logout</span>
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
