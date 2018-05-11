import React from 'react';
import moment from 'moment';

export default class PromotionsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.promotion ? props.promotion.description : '',
      valid: props.promotion ? props.promotion.valid : 'yes',
      error: ''
    };
  }
  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onValidChange = e => {
    const valid = e.target.value;
    this.setState(() => ({ valid }));
  };
  onSubmit = e => {
    e.preventDefault();
    if (!this.state.description) {
      this.setState(() => ({
        error: 'Por favor adicione descrição.'
      }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        valid: this.state.valid
      });
    }
  };
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          type="text"
          placeholder="Descrição"
          autoFocus
          className="text-input"
          value={this.state.description}
          onChange={this.onDescriptionChange}
          required
        />
        <select
          className="select"
          onChange={this.onValidChange}
          value={this.state.valid}
        >
          <option key="yes" value="yes">
            Ativar
          </option>
          <option key="no" value="no">
            Desativar
          </option>
        </select>
        <div>
          {this.state.description && (
            <button className="button">Confirmar</button>
          )}
        </div>
      </form>
    );
  }
}
