import React from 'react';
import { connect } from 'react-redux';

import ClientForm from './ClientForm';
import MenuAdmin from '../MenuAdmin';
import { startAddClient } from '../../../actions/clients';

export class ClientAddPage extends React.Component {
  onSubmit = client => {
    this.props.startAddClient(client);
    this.props.history.push('/admin/client');
  };
  render() {
    return (
      <div className="dashboard">
        <MenuAdmin />
        <div className="dashboard__content">
          <div className="page-header">
            <div className="content-container">
              <h1 className="page-header__title">Adicionar Cliente</h1>
            </div>
          </div>
          <div className="content-container">
            <ClientForm onSubmit={this.onSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startAddClient: client => dispatch(startAddClient(client))
});

export default connect(undefined, mapDispatchToProps)(ClientAddPage);
