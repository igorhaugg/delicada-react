import React from 'react';
import Breadcrumbs from '../Breadcrumbs';
import Contact from './Contact';
import { connect } from 'react-redux';
import { startAddContact } from '../../../actions/contacts';
import { confirmAlert } from 'react-confirm-alert';
import { withRouter } from 'react-router-dom';

export class MainContent extends React.Component {
  onSubmit = contact => {
    this.props.startAddContact(contact);
    confirmAlert({
      title: 'Confirmação',
      message: 'Mensagem enviada com sucesso.',
      buttons: [
        {
          label: 'Ok'
        }
      ]
    });
    this.props.history.push('/contact');
  };
  render() {
    return (
      <main className="wrapper">
        <Breadcrumbs route="/contact" title="Contato" />
        <Contact onSubmit={this.onSubmit} />
      </main>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startAddContact: contact => dispatch(startAddContact(contact))
});

export default withRouter(connect(undefined, mapDispatchToProps)(MainContent));
