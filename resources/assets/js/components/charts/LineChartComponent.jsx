import React, { Component } from 'react';
import {connect} from 'react-redux';
var LineChart = require("react-chartjs").Line;

var chartOptions = {
        scales: {
            xAxes: [{
                display: false
            }]
        }
    };

export default class LineChartComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.chartData.labels || !this.props.chartData.values) return <span />;
    var data = {
        labels: this.props.chartData.labels,
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,1)",
                highlightFill: "rgba(220,220,220,0.75)",
                highlightStroke: "rgba(220,220,220,1)",
                data: this.props.chartData.values
            }
        ]
    };

    return (
      <div>
        <LineChart data={data} options={chartOptions} width="600" height="250"/>
      </div>
    );
  }
};
