import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';

import {
  setTextFilter,
  sortByDate,
  sortByName,
  setStartDate,
  setEndDate
} from '../../../actions/filters';

export class SalesListFilters extends React.Component {
  state = {
    calendarFocused: null,
    startDate: ''
  };
  componentWillMount() {
    const sales = this.props.allSales
      .map(sale => sale.createdAt)
      .sort((a, b) => {
        return a.createdAt < b.createdAt ? 1 : -1;
      });

    const month = moment(sales[0]).month();
    const startDate = moment()
      .month(month)
      .date(1);

    const startDateFinal = moment(startDate);

    this.setState({
      startDate: startDateFinal
    });
    this.props.setStartDate(startDateFinal);
  }
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onFocusChange = calendarFocused => {
    this.setState(() => ({ calendarFocused }));
  };
  onTextChange = e => {
    this.props.setTextFilter(e.target.value);
  };
  onSortChange = e => {
    if (e.target.value === 'date') {
      this.props.sortByDate();
    } else if (e.target.value === 'name') {
      this.props.sortByName();
    }
  };
  render() {
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input
              type="text"
              className="text-input"
              placeholder="Pesquisar"
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
            </select>
          </div>
          <div className="input-group__item">
            <DateRangePicker
              startDate={this.state.startDate}
              endDate={this.props.filters.endDate}
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              showClearDates={true}
              numberOfMonths={1}
              isOutsideRange={() => false}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  allSales: state.sales,
  filters: state.filters
});

const mapDispatchToProps = dispatch => ({
  setTextFilter: text => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByName: () => dispatch(sortByName()),
  setStartDate: startDate => dispatch(setStartDate(startDate)),
  setEndDate: endDate => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(SalesListFilters);
