import React from 'react';
import MenuAdmin from './MenuAdmin';
import { connect } from 'react-redux';
import selectCategories from '../../selectors/categories';
import selectCategoriesId from '../../selectors/categories-id';
import selectClients from '../../selectors/clients-birth';
import Chart from './Chart';
import randomColor from 'randomcolor';
import ClientListItem from './clients/ClientListItem';

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
          <section className="dashboard__content--chart">
            <Chart
              chartDataProducts={this.state.chartDataProducts}
              title="Amount of products"
              legendPosition="bottom"
            />
          </section>
          <div className="dashboard__content--clients">
            <p>Births of the month!</p>
            {this.props.clients.map(client => {
              return <ClientListItem key={client.id} {...client} />;
            })}
            {console.log(this.props.clients)}
          </div>
        </section>
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
