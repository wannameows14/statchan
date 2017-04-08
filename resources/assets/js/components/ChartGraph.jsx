import React, { Component } from 'react';
import { LineChart } from 'react-easy-chart';

export default class ChartGraph extends Component {
  constructor(props) {
    super(props);
    this.renderGraph = this.renderGraph.bind(this);
  };

  renderGraph() {
    // check if any series has been fetched
    if (!this.props.series) {
      return (
        <div>Graph is loading or no data to show</div>
      );
    };
    // LineChart expects array in format:
    // 1 series - [[{},{},{}]]
    // 2 series - [[{},{},{}],[{},{},{}]]
    let series = [];
    // check prop[0] to be array. If not - push into array to maintain
    // LineCharts expectations
    if (this.props.series[0] instanceof Array) {
      series = this.props.series;
    } else {
      series.push(this.props.series);
    };

    return (
      <div className="center">
        <LineChart
          xType={'text'}
          lineColors={['#2196f3', '#ff5722']}
          axes
          interpolate={'cardinal'}
          width={750}
          height={250}
          data={series}
        />
      </div>
    );
  };

  render() {
    return (
      <div>
      { this.renderGraph() }
      </div>
    );
  };
};
