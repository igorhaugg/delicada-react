import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectClients from '../../../selectors/clients';

export const ClientsSummary = ({ clientCount }) => {
  const clientWord = clientCount === 1 ? 'client' : 'clients';

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{clientCount}</span> {clientWord}
        </h1>
        <div className="page-header__actions">
          <Link className="button" to="/admin/client/create">
            Add Client
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
