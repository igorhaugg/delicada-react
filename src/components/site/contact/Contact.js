import React from 'react';
import moment from 'moment';
import { WhatsappIcon } from 'react-share';
import { withRouter } from 'react-router-dom';

export class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: this.props.location.state
        ? `Gostaria de comprar o produto: ${
            this.props.location.state.productSelected
          }`
        : '',
      error: '',
      createdAt: moment()
    };
  }

  componentWillUnmount() {}

  onNameChange = e => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  };
  onEmailChange = e => {
    const email = e.target.value;
    this.setState(() => ({ email }));
  };
  onPhoneChange = e => {
    const phone = e.target.value;
    this.setState(() => ({ phone }));
  };
  onMessageChange = e => {
    const message = e.target.value;
    this.setState(() => ({ message }));
  };
  onSubmit = e => {
    e.preventDefault();
    if (!this.state.name || !this.state.email || !this.state.message) {
      this.setState(() => ({
        error:
          'Nome, email e mensagem são informações obrigatórias para enviar uma mensagem.'
      }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        message: this.state.message,
        createdAt: this.state.createdAt.valueOf()
      });
    }
  };
  render() {
    return (
      <div className="wrapper contact">
        <div className="contact__details">
          <span>Você tem alguma pergunta?</span>
          <span>
            Fique a vontade para nos enviar uma mensagens e iremos lhe ajudar!
          </span>
          <span>Whatsapp</span>
          <span className="contact__number">
            <WhatsappIcon size={54} round /> <span>99945345421</span>
          </span>
        </div>
        <div className="contact__form">
          <form className="form" onSubmit={this.onSubmit}>
            {this.state.error && (
              <p className="form__error">{this.state.error}</p>
            )}
            <input
              type="text"
              placeholder="Nome"
              className="text-input-site"
              value={this.state.name}
              onChange={this.onNameChange}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="text-input-site"
              value={this.state.email}
              onChange={this.onEmailChange}
              required
            />
            <input
              type="text"
              placeholder="Número do telefone"
              className="text-input-site"
              value={this.state.phone}
              onChange={this.onPhoneChange}
              required
            />
            <textarea
              placeholder="Mensagem"
              className="textarea-site"
              value={this.state.message}
              onChange={this.onMessageChange}
            />

            <div>
              <button className="button button--home">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
// export default Contact;
export default withRouter(Contact);
