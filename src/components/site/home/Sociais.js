import React from 'react';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const Sociais = () => {
  return (
    <div className="wrapper section section--sociais">
      <h3 className="section__title">Redes Sociais</h3>
      <div className="section__details">
        <p>Entre em contato pelas nossas redes sociais. </p>
      </div>
      <ul className="sociais">
        <li>
          <SocialIcon
            className="sociais__link"
            url="https://www.facebook.com/igor.haugg"
          />
        </li>
        <li>
          <SocialIcon
            className="sociais__link"
            url="https://twitter.com/igorhaugg"
          />
        </li>
        <li>
          <SocialIcon
            className="sociais__link"
            url="https://www.instagram.com/marcia.dasilva1410/"
          />
        </li>
      </ul>
    </div>
  );
};

export default Sociais;
