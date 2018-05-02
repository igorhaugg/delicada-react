import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import {
  setTextFilter,
  setCategoryFilter,
  sortByDate,
  sortByPrice,
  sortByName
} from '../../../actions/filters';
import selectProducts from '../../../selectors/products';

export class ProductListFilters extends React.Component {
  onTextChange = e => {
    this.props.setTextFilter(e.target.value);
  };
  onSortChange = e => {
    if (e.target.value === 'date') {
      this.props.sortByDate();
    } else if (e.target.value === 'price') {
      this.props.sortByPrice();
    } else if (e.target.value === 'name') {
      this.props.sortByName();
    }
  };
  onCategoryChange = e => {
    if (e.target.value) {
      this.props.setCategoryFilter(e.target.value);
    }
  };
  render() {
    return (
      <div className="wrapper products">
        <div className="input-group">
          <div className="input-group__item">
            <input
              type="text"
              className="text-input"
              placeholder="Search products"
              value={this.props.filters.text}
              onChange={this.onTextChange}
            />
          </div>
          <div className="input-group__item">
            <select
              className="select"
              value={this.props.filters.sortBy}
              onChange={this.onSortChange}
            >
              <option value="date">Data</option>
              <option value="name">Nome</option>
              <option value="price">Preço</option>
            </select>
          </div>
          <div className="input-group__item">
            <select className="select" onChange={this.onCategoryChange}>
              <option key="default" value="default">
                Categoria
              </option>
              {this.props.categories.map(category => {
                return (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters,
  categories: state.categories,
  products: selectProducts(state.products, state.filters)
});

const mapDispatchToProps = dispatch => ({
  setTextFilter: text => dispatch(setTextFilter(text)),
  setCategoryFilter: category => dispatch(setCategoryFilter(category)),
  sortByDate: () => dispatch(sortByDate()),
  sortByPrice: () => dispatch(sortByPrice()),
  sortByName: () => dispatch(sortByName())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductListFilters);
