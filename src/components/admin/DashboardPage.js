import React from 'react';
import MenuAdmin from './MenuAdmin';
import { connect } from 'react-redux';
import selectCategories from '../../selectors/categories';
import selectCategoriesId from '../../selectors/categories-id';
import Chart from './Chart';
import randomColor from 'randomcolor';

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartDataProducts: {}
    };
  }

  componentWillMount() {
    this.getChartDataProducts();
  }

  getChartDataProducts() {
    const val = [
      ...this.props.categories.map(category => category.name).sort((a, b) => {
        return a.name < b.name ? -1 : 1;
      })
    ];
    const amount = Object.values(this.props.amount);
    const colors = [
      ...this.props.categories.map(category =>
        randomColor({
          luminosity: 'random', //'light'
          hue: 'random', // 'blue' 'green'
          format: 'rgba',
          alpha: 1
        })
      )
    ];
    this.setState({
      chartDataProducts: {
        labels: [...val],
        datasets: [
          {
            data: amount,
            backgroundColor: [...colors]
          }
        ]
      }
    });
  }

  render() {
    return (
      <main className="dashboard">
        <MenuAdmin />
        <section className="dashboard__content">
          <Chart
            chartDataProducts={this.state.chartDataProducts}
            title="Amount of products"
            legendPosition="bottom"
          />
        </section>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: selectCategories(state.categories, state.filters),
    amount: selectCategoriesId(state.products, state.categories, state.filters)
  };
};

export default connect(mapStateToProps)(DashboardPage);
