import React from 'react';
import Breadcrumbs from '../Breadcrumbs';

export class MainContent extends React.Component {
  render() {
    return (
      <main className="wrapper">
        <Breadcrumbs route="/sobre" title="Sobre" />
        <div className="wrapper contact">
          Delicada Mulher é uma loja especializada em vendas de roupas
          femininas.
        </div>
      </main>
    );
  }
}

export default MainContent;
