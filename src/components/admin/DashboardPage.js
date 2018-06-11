import React from 'react';
import numeral from 'numeral';
import randomColor from 'randomcolor';
import { connect } from 'react-redux';

import Chart from './Chart';
import ClientListBirthday from './clients/ClientListBirthday';
import MenuAdmin from './MenuAdmin';
import DashboardFilter from './DashboardFilter';
import selectCategories from '../../selectors/categories';
import selectCategoriesId from '../../selectors/categories-id';
import selectClients from '../../selectors/clients-birth';
import selectProducts from '../../selectors/products';
import selectSales from '../../selectors/sales';

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartDataProducts: {},
      chartDataSales: {},
      value: 'date'
    };
  }

  componentDidMount() {
    document.title = 'Delicada Mulher - Resumo';
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 2);
  }
  componentWillUnmount() {
    document.title = 'Delicada Mulher';
  }

  componentWillMount() {
    this.getChartDataProducts();
    this.getChartDataSales();
  }

  getVal() {
    return [...this.props.categories.map(category => category.name)];
  }

  getTotais() {
    return this.props.categories.map(category => {
      let total = 0;
      const sales = this.props.allSales.filter(sale => {
        if (sale.category_id === category.id) {
          total += sale.price;
        }
      });

      return total;
    });
  }

  getColors() {
    return [
      ...this.props.categories.map(category =>
        randomColor({
          luminosity: 'random', //'light'
          hue: 'random', // 'blue' 'green'
          format: 'rgba',
          alpha: 1
        })
      )
    ];
  }

  getChartDataProducts() {
    const val = this.getVal();
    const amount = Object.values(this.props.amount);
    const colors = this.getColors();

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
    const val = this.getVal();
    const amount = Object.values(this.getTotais());
    const colors = this.getColors();

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
        <article className="dashboard__content--home">
          <div className="dashboard__info">
            <Chart
              type="pie"
              chartData={this.state.chartDataProducts}
              title="Quantidade de produtos"
              legendPosition="bottom"
            />
            <Chart
              type="bar"
              chartData={this.state.chartDataSales}
              title="Vendas realizadas"
              legendPosition="bottom"
            />
          </div>
          <div className="dashboard__birthday">
            <h1>Clientes de Aniversário este mês!</h1>
            {this.props.clients.length === 0 ? (
              <div className="list-item list-item--message">
                <span>Nenhum cliente</span>
              </div>
            ) : (
              this.props.clients.map(client => {
                return <ClientListBirthday key={client.id} {...client} />;
              })
            )}
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
    clients: selectClients(state.clients, state.filters),
    sales: selectSales(state.sales, state.filters),
    allSales: state.sales,
    products: selectProducts(state.products, state.filters)
  };
};

export default connect(mapStateToProps)(DashboardPage);
