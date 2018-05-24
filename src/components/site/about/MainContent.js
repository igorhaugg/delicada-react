import React from 'react';
import Breadcrumbs from '../Breadcrumbs';

export class MainContent extends React.Component {
  render() {
    return (
      <main className="wrapper">
        <Breadcrumbs route="/sobre" title="Sobre" />
      </main>
    );
  }
}

export default MainContent;
