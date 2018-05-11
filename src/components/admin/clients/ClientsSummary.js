import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import selectClients from '../../../selectors/clients';

export const ClientsSummary = ({ clientCount }) => {
  const clientWord = clientCount === 1 ? 'cliente' : 'clientes';
  const registerWord = clientCount === 1 ? 'cadastrado' : 'cadastrados';

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          <span>{clientCount}</span> {clientWord} {registerWord}
        </h1>
        <div className="page-header__actions">
          <Link className="button" to="/admin/client/create">
            Adicionar
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const visibleClients = selectClients(state.clients, state.filters);

  return {
    clientCount: visibleClients.length
  };
};

export default connect(mapStateToProps)(ClientsSummary);
