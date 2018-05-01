import React from 'react';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const Social = () => {
  return (
    <div className="wrapper social">
      <h3 className="social__title">Redes Sociais</h3>
      <div className="social__details">
        <p>Entre em contato pelas nossas redes sociais. </p>
      </div>
      <ul className="social__list">
        <li>
          <SocialIcon
            className="social__link"
            url="https://www.facebook.com/igor.haugg"
          />
        </li>
        <li>
          <SocialIcon
            className="social__link"
            url="https://twitter.com/igorhaugg"
          />
        </li>
        <li>
          <SocialIcon
            className="social__link"
            url="https://www.instagram.com/marcia.dasilva1410/"
          />
        </li>
      </ul>
    </div>
  );
};

export default Social;
