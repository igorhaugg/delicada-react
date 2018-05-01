import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Footer = props => {
  const iconLogged = props.isAuthenticated ? 'fas fa-home' : 'fas fa-lock';
  return (
    <footer className="footer">
      <ul>
        <li>
          <Link to="/login">
            <i className={iconLogged} />
          </Link>
        </li>
      </ul>
    </footer>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(Footer);
