import React from 'react';
import { Animated } from 'react-animated-css';

const Logo = () => {
  return (
    <div className="logo wrapper">
      <Animated animationIn="jello" animationOut="tada" isVisible={true}>
        <h3 className="logo__title">Delicada Mulher</h3>
      </Animated>

      <p className="logo__subtitle">Moda Feminina</p>
    </div>
  );
};

export default Logo;
