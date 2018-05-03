import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Animated } from 'react-animated-css';
import moment from 'moment';
import numeral from 'numeral';

import selectProducts from '../../../selectors/products-name';
import { setProductFilter } from '../../../actions/filters';
import Breadcrumbs from './Breadcrumbs';

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
    this.props.setProductFilter('');
    clearInterval(this.intervalId);
  }
  render() {
    let product = null;
    if (this.props.products[0]) {
      product = this.props.products[0];
    }
    return (
      <div>
        <main className="wrapper">
          {this.props.products[0] ? (
            <Fragment>
              <Breadcrumbs product={product.name} />
              <div className="wrapper details">
                <img className="details__image" src={product.image} />
                <div className="details__info">
                  <span>{product.name}</span>
                  <span>
                    Preço:
                    <strong>
                      R{numeral(product.price_sell).format('$0,0.00')}
                    </strong>
                  </span>
                  <Animated
                    animationIn="wobble"
                    animationOut="tada"
                    isVisible={this.state.onoff}
                  >
                    <Link className="button button--home" to="/products">
                      Pedir
                    </Link>
                  </Animated>
                  <span className="details__description">
                    {product.description}
                  </span>
                  <div className="details__share">
                    <span>Facebook</span>
                    <span>Instagram</span>
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

const mapStateToProps = state => ({
  filters: state.filters,
  products: selectProducts(state.products, state.filters)
});

const mapDispatchToProps = dispatch => ({
  setProductFilter: product => dispatch(setProductFilter(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
