import React from 'react';
import MenuAdmin from './MenuAdmin';
import { connect } from 'react-redux';
import selectCategories from '../../selectors/categories';
import selectCategoriesId from '../../selectors/categories-id';
import Chart from './Chart';

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

    this.setState({
      chartDataProducts: {
        labels: [...val],
        datasets: [
          {
            data: amount,
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
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
