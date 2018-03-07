import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData
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
        {this.props.type === 'pie' && (
          <Pie
            data={this.state.chartData}
            options={{
              title: {
                display: this.props.displayTitle,
                text: this.props.title,
                fontColor: 'black',
                fontSize: 30
              },
              legend: {
                display: this.props.displayLegend,
                position: this.props.legendPosition
              },
              responsive: true,
              maintainAspectRatio: false
            }}
          />
        )}
        {this.props.type === 'bar' && (
          <Bar
            data={this.state.chartData}
            options={{
              title: {
                display: this.props.displayTitle,
                text: this.props.title,
                fontColor: 'black',
                fontSize: 30
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
                ],
                xAxes: [
                  {
                    barPercentage: 1,
                    categoryPercentage: 0.6
                  }
                ]
              }
            }}
          />
        )}
      </div>
    );
  }
}

export default Chart;
