import React from 'react';
import { Link } from 'react-router-dom';
import Particles from 'react-particles-js';

const NotFoundPage = props => (
  <div>
    <Particles
      canvasClassName="canvas-particles"
      params={{
        particles: {
          line_linked: {
            shadow: {
              enable: true,
              color: '#3CA9D1',
              blur: 5,
              opacity: 1
            }
          },
          size: {
            value: 3,
            random: true
          },
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800
            }
          },
          move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'repulse'
            },
            resize: true
          }
        }
      }}
    />
    <div className="notfound">
      <div className="notfound__title">Página não encontrada!</div>
      <div className="notfound__buttons">
        <Link to="/" className="button">
          Início
        </Link>
        <button className="button" onClick={() => props.history.goBack()}>
          Voltar
        </button>
      </div>
    </div>
  </div>
);

export default NotFoundPage;
