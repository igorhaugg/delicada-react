import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import selectProducts from '../../../selectors/products';
import { Animated } from 'react-animated-css';

class Products extends React.Component {
  state = {
    onoff: true
  };

  getInitialState() {
    return {
      onoff: this.props.onoff
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        onoff: !this.state.onoff
      });
    }, 3000);
  }
  render() {
    return (
      <div className="wrapper section section--padding-bottom">
        <h3 className="section__title">Novidades</h3>
        <div className="wrapper section__list">
          {this.props.products
            .slice(
              0,
              this.props.products.length >= 3 ? 3 : this.props.products.length
            )
            .map(product => {
              return (
                <div key={product.id}>
                  <Link to="/" className="wrapper">
                    <div className="section__image__overlay">
                      <img
                        className="section__image"
                        src={product.image}
                        alt=""
                      />
                    </div>
                    <span className="section__description">{product.name}</span>
                  </Link>
                </div>
              );
            })}
        </div>
        <Animated
          animationIn="jello"
          animationOut="tada"
          isVisible={this.state.onoff}
        >
          <Link className="button button--home" to="/products">
            Mais
          </Link>
        </Animated>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: selectProducts(state.products, state.filters)
});

export default connect(mapStateToProps)(Products);
