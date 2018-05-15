import React from 'react';
import { Link } from 'react-router-dom';

const Visit = () => {
  return (
    <div className="wrapper visit">
      <h3 className="visit__title">Agende uma visita</h3>
      <div className="visit__details">
        <p>Gostou de algum de nossos produtos? </p>
        <p>Agende uma visita e nós entraremos em contato</p>
      </div>
      <Link className="button button--home button--home-hover" to="/contact">
        Agendar
      </Link>
    </div>
  );
};

export default Visit;
