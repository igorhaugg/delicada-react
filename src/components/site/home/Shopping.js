import React from 'react';
import { Link } from 'react-router-dom';

const Shopping = () => {
  return (
    <div className="wrapper section">
      <h3 className="section__title">Marcas de qualidade</h3>
      <div className="wrapper section__list">
        <div className="wrapper">
          <div className="section__image__overlay">
            <img
              className="section__image"
              src="/images/shopping1.png"
              alt=""
            />
          </div>
          <span className="section__description">Loja 1</span>
        </div>
        <div className="wrapper">
          <div className="section__image__overlay">
            <img
              className="section__image"
              src="/images/shopping2.png"
              alt=""
            />
          </div>
          <span className="section__description">Loja 2</span>
        </div>
        <div className="wrapper">
          <div className="section__image__overlay">
            <img
              className="section__image"
              src="/images/shopping3.png"
              alt=""
            />
          </div>
          <span className="section__description">Loja 3</span>
        </div>
      </div>
    </div>
  );
};

export default Shopping;
