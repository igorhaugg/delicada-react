import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }
  onEmailChange = e => {
    const email = e.target.value;
    this.setState(() => ({ email }));
  };
  onPasswordChange = e => {
    const password = e.target.value;
    this.setState(() => ({ password }));
  };
  onSubmit = e => {
    e.preventDefault();
    if (!this.state.email || !this.state.password) {
      this.setState(() => ({
        error: 'Please provide email and password.'
      }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.startLogin(this.state.email, this.state.password);
    }
  };
  render() {
    return (
      <div className="box-layout">
        <div className="box-layout__box">
          <form className="form" onSubmit={this.onSubmit}>
            {this.state.error && (
              <p className="form__error">{this.state.error}</p>
            )}
            <input
              type="email"
              placeholder="Email"
              autoFocus
              className="text-input"
              value={this.state.email}
              onChange={this.onEmailChange}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="text-input"
              value={this.state.password}
              onChange={this.onPasswordChange}
              required
            />

            <button className="button">Login</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startLogin: (email, password) => dispatch(startLogin(email, password))
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
