import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import selectProducts from '../../../selectors/products';

class Latest extends React.Component {
  render() {
    return (
      <div className="wrapper latest">
        <h3 className="latest__title">Novidades</h3>
        <div className="wrapper latest__list">
          {this.props.products
            .slice(
              0,
              this.props.products.length >= 4 ? 4 : this.props.products.length
            )
            .map(product => {
              return (
                <div key={product.id}>
                  <Link to={`/produtos/${product.id}`} className="wrapper">
                    <div className="latest__image__overlay">
                      <img
                        className="latest__image"
                        src={product.image}
                        alt=""
                      />
                    </div>
                    <span className="latest__description">{product.name}</span>
                  </Link>
                </div>
              );
            })}
        </div>
        <Link className="button button--home" to="/produtos">
          Mais
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: selectProducts(state.products, state.filters)
});

export default connect(mapStateToProps)(Latest);
