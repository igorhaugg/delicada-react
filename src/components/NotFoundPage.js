import React from 'react';
import { Link } from 'react-router-dom';

const goBack = props => {
  props.history.goBack();
};

const NotFoundPage = props => (
  <div>
    404 - <Link to="/">Início</Link>
    <button onClick={() => goBack(props)}>Voltar</button>
  </div>
);

export default NotFoundPage;
