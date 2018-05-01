import React from 'react';
import { Link } from 'react-router-dom';

const Visit = () => {
  return (
    <div className="wrapper section section--secondary">
      <h3 className="section__title section__title--secondary">
        Agente uma visita
      </h3>
      <div className="section__details">
        <p>Gostou de algum de nossos produtos? </p>
        <p>Agende uma visita e nós entraremos em contato</p>
      </div>
      <Link className="button button--home" to="/products">
        Agendar
      </Link>
    </div>
  );
};

export default Visit;
