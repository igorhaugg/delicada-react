import React from 'react';
import { connect } from 'react-redux';

import ClientListItem from './ClientListItem';
import selectClients from '../../../selectors/clients';

export const ClientList = props => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Clientes</div>
      <div className="show-for-desktop">Cliente</div>
    </div>
    <div className="list-body">
      {props.clients.length === 0 ? (
        <div className="list-item list-item--message">
          <span>Nenhum cliente cadastrado</span>
        </div>
      ) : (
        props.clients.map(client => {
          return <ClientListItem key={client.id} {...client} />;
        })
      )}
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    clients: selectClients(state.clients, state.filters)
  };
};

export default connect(mapStateToProps)(ClientList);
