import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartDataProducts: props.chartDataProducts
    };
  }

  static defaultProps = {
    displayTitle: true,
    // displayLegend: true,
    legendPosition: 'right',
    title: 'Amount'
  };

  render() {
    return (
      <div className="chart">
        <Bar
          data={this.state.chartDataProducts}
          options={{
            title: {
              display: this.props.displayTitle,
              text: this.props.title,
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true
                  }
                }
              ]
            }
          }}
        />
      </div>
    );
  }
}

export default Chart;
