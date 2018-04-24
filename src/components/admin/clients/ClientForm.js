import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import firebase from 'firebase';

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.client ? props.client.name : '',
      address: props.client ? props.client.address : '',
      workplace: props.client ? props.client.workplace : '',
      cpf: props.client ? props.client.cpf : '',
      phone: props.client ? props.client.phone : '',
      email: props.client ? props.client.email : '',
      // createdAt: props.client ? moment(props.client.createdAt) : moment(),
      createdAt: props.client ? props.client.createdAt : '',
      calendarFocused: false,
      error: ''
    };
  }
  onNameChange = e => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  };
  onAddressChange = e => {
    const address = e.target.value;
    this.setState(() => ({ address }));
  };
  onWorkplaceChange = e => {
    const workplace = e.target.value;
    this.setState(() => ({ workplace }));
  };
  onCpfChange = e => {
    const cpf = e.target.value;
    this.setState(() => ({ cpf }));
  };
  onPhoneChange = e => {
    const phone = e.target.value;
    this.setState(() => ({ phone }));
  };
  onEmailChange = e => {
    const email = e.target.value;
    this.setState(() => ({ email }));
  };
  onInputDateChange = e => {
    const createdAt = e.target.value;
    this.setState(() => ({ createdAt }));
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = e => {
    e.preventDefault();
    if (!this.state.name || !this.state.cpf || !this.state.phone) {
      this.setState(() => ({
        error: 'Please provide name, cpf and phne.'
      }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        name: this.state.name,
        address: this.state.address,
        workplace: this.state.workplace,
        cpf: this.state.cpf,
        phone: this.state.phone,
        email: this.state.email,
        createdAt: this.state.createdAt.valueOf()
      });
    }
  };
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          type="text"
          placeholder="Name"
          autoFocus
          className="text-input"
          value={this.state.name}
          onChange={this.onNameChange}
          required
        />
        <input
          type="text"
          placeholder="Address"
          className="text-input"
          value={this.state.address}
          onChange={this.onAddressChange}
        />
        <input
          type="text"
          placeholder="Workplace"
          className="text-input"
          value={this.state.workplace}
          onChange={this.onWorkplaceChange}
        />
        <div className="form__group">
          <input
            type="text"
            placeholder="CPF"
            className="text-input"
            value={this.state.cpf}
            onChange={this.onCpfChange}
            required
          />
          <input
            type="text"
            placeholder="Phone"
            className="text-input"
            value={this.state.phone}
            onChange={this.onPhoneChange}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="text-input"
            value={this.state.email}
            onChange={this.onEmailChange}
          />
        </div>
        <input
          type="date"
          placeholder="Date"
          className="text-input"
          value={this.state.createdAt}
          onChange={this.onInputDateChange}
        />
        {/* <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          // showDefaultInputIcon={true}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        /> */}

        <div>
          {this.state.name &&
            this.state.cpf &&
            this.state.phone && <button className="button">Save Client</button>}
        </div>
      </form>
    );
  }
}
