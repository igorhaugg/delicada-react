import React from 'react';
import MenuAdmin from './MenuAdmin';
import { connect } from 'react-redux';
import selectCategories from '../../selectors/categories';
import selectCategoriesId from '../../selectors/categories-id';
import selectClients from '../../selectors/clients-birth';
import Chart from './Chart';
import randomColor from 'randomcolor';
import ClientListBirthday from './clients/ClientListBirthday';

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartDataProducts: {},
      chartDataSales: {}
    };
  }

  componentWillMount() {
    this.getChartDataProducts();
    this.getChartDataSales();
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

  getChartDataSales() {
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
      chartDataSales: {
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
        <article className="dashboard__content">
          <h1>Birthdays of the month!</h1>
          <div className="dashboard__content--clients">
            {this.props.clients.length === 0 ? (
              <div className="list-item list-item--message">
                <span>No clients</span>
              </div>
            ) : (
              this.props.clients.map(client => {
                return <ClientListBirthday key={client.id} {...client} />;
              })
            )}
          </div>
          <div className="dashboard__content--clients">
            <Chart
              type="pie"
              chartData={this.state.chartDataProducts}
              title="Amount of products"
              legendPosition="bottom"
            />
            <Chart
              type="bar"
              chartData={this.state.chartDataSales}
              title="Amount of sales"
              legendPosition="bottom"
            />
          </div>
        </article>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: selectCategories(state.categories, state.filters),
    amount: selectCategoriesId(state.products, state.categories, state.filters),
    clients: selectClients(state.clients, state.filters)
  };
};

export default connect(mapStateToProps)(DashboardPage);
