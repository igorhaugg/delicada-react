import React from 'react';
import { Animated } from 'react-animated-css';

const Banner = () => {
  return (
    <Animated animationIn="fadeInUp" animationInDelay={500} isVisible={true}>
      <div className="banner wrapper">
        <span />
        <span />
        <span />
      </div>
    </Animated>
  );
};

export default Banner;
