import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Animated } from 'react-animated-css';
import moment from 'moment';
import numeral from 'numeral';
import { withRouter } from 'react-router-dom';

import selectProducts from '../../../selectors/products-name';
import Breadcrumbs from '../Breadcrumbs';

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon
} from 'react-share';

class Details extends React.Component {
  state = {
    onoff: true
  };

  getInitialState() {
    return {
      onoff: this.props.onoff
    };
  }

  componentWillMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        onoff: !this.state.onoff
      });
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    let product = null;
    if (this.props.product) {
      product = this.props.product;
    }
    return (
      <div>
        <main className="wrapper">
          {this.props.product ? (
            <Fragment>
              <Breadcrumbs
                product={product.name}
                route="/products"
                title="Produtos"
              />
              <div className="wrapper details">
                <img className="details__image" src={product.image} />
                <div className="details__info">
                  <span>{product.name}</span>
                  <span className="details__numbers">
                    <strong>
                      <span>R$</span>
                      {product.price_sell
                        .toFixed(2)
                        .toString()
                        .replace('.', ',')}
                    </strong>
                  </span>
                  <Animated
                    animationIn="wobble"
                    animationOut="tada"
                    isVisible={this.state.onoff}
                  >
                    <Link className="button button--home" to="/contact">
                      Pedir
                    </Link>
                  </Animated>
                  <span className="details__description">
                    {product.description}
                  </span>
                  <span className="details__description">
                    Compartilhe nas redes sociais:
                  </span>
                  <div className="details__share">
                    <span>
                      <TwitterShareButton
                        url={`https://delicada-mulher.firebaseapp.com/products/${
                          product.id
                        }`}
                        quote={`Confira na loja delicada mulher, ${
                          product.name
                        }!`}
                      >
                        <TwitterIcon size={54} round />
                      </TwitterShareButton>
                    </span>
                    <span>
                      <FacebookShareButton
                        url={`https://delicada-mulher.firebaseapp.com/products/${
                          product.id
                        }`}
                        quote={`Confira na loja delicada mulher, ${
                          product.name
                        }!`}
                      >
                        <FacebookIcon size={54} round />
                      </FacebookShareButton>
                    </span>
                    <span>
                      <WhatsappShareButton
                        url={`https://delicada-mulher.firebaseapp.com/products/${
                          product.id
                        }`}
                        quote={`Confira na loja delicada mulher, ${
                          product.name
                        }!`}
                      >
                        <WhatsappIcon size={54} round />
                      </WhatsappShareButton>
                    </span>
                  </div>
                </div>
              </div>
            </Fragment>
          ) : (
            undefined
          )}
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  product: state.products.find(product => product.id === props.match.params.id)
});

export default withRouter(connect(mapStateToProps)(Details));
