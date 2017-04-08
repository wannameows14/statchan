import React, { Component } from 'react';
var LineChart = require("react-chartjs").Line;

var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,1)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};
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
    return (
      <div>
        <LineChart data={data} options={chartOptions} width="600" height="250"/>
      </div>
    );
  }
};
