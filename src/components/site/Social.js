import React from 'react';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import { WhatsappIcon } from 'react-share';

const Social = () => {
  return (
    <div className="wrapper social">
      <h3 className="social__title">Redes Sociais</h3>
      <div className="social__details">
        <p>Entre em contato pelas nossas redes sociais. </p>
      </div>
      <ul className="social__list">
        <li className="social__facebook">
          <SocialIcon
            className="social__link"
            url="https://www.facebook.com/Delicada-Mulher-Moda-Feminina-1633902576707232/"
          />
        </li>
        <li className="social__whatsapp">
          <WhatsappIcon size={50} round />
          <span>55 99112-9608</span>
        </li>
        {/* <li>
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
        </li> */}
      </ul>
    </div>
  );
};

export default Social;
