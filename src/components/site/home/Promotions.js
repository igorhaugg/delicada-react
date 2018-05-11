import React from 'react';
import { connect } from 'react-redux';
import { Animated } from 'react-animated-css';

class Promotions extends React.Component {
  render() {
    const promotions = this.props.promotions;
    const promotionRender = (
      <div className="promotions wrapper">
        {promotions.map(promotion => {
          return (
            <div key={promotion.id} className="promotions__description">
              {promotion.description}
            </div>
          );
        })}
      </div>
    );
    return <div>{promotions.length > 0 ? promotionRender : ''}</div>;
  }
}

const mapStateToProps = state => {
  const promotions = state.promotions.filter(
    promotion => promotion.valid === 'yes'
  );
  return {
    promotions
  };
};

export default connect(mapStateToProps)(Promotions);
