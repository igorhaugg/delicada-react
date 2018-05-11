import React from 'react';
import { connect } from 'react-redux';
import { confirmAlert } from 'react-confirm-alert';

import ClientForm from './ClientForm';
import MenuAdmin from '../MenuAdmin';
import { startEditClient, startRemoveClient } from '../../../actions/clients';

export class ClientEditPage extends React.Component {
  onSubmit = client => {
    this.props.startEditClient(this.props.client.id, client);
    this.props.history.push('/admin/client');
  };
  onRemove = () => {
    confirmAlert({
      title: 'Confirmar',
      message: 'Você tem certeza?',
      buttons: [
        {
          label: 'Remover',
          onClick: () => this.onClickRemove()
        },
        {
          label: 'Cancelar'
        }
      ]
    });
  };
  onClickRemove = () => {
    this.props.startRemoveClient({ id: this.props.client.id });
    this.props.history.push('/admin/client');
  };
  render() {
    return (
      <div className="dashboard">
        <MenuAdmin />
        <div className="dashboard__content">
          <div className="page-header">
            <div className="content-container">
              <h1 className="page-header__title">Editar Cliente</h1>
            </div>
          </div>
          <div className="content-container">
            <ClientForm client={this.props.client} onSubmit={this.onSubmit} />
            <button
              className="button button--secondary"
              onClick={this.onRemove}
            >
              Remover
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  client: state.clients.find(client => client.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditClient: (id, client) => dispatch(startEditClient(id, client)),
  startRemoveClient: data => dispatch(startRemoveClient(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ClientEditPage);
