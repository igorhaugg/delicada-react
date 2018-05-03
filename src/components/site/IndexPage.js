import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import MainContent from './home/MainContent';
import Social from './Social';

class IndexPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Fragment>
        <Header />
        <MainContent />
        <Social />
        <Footer />
      </Fragment>
    );
  }
}

export default IndexPage;
