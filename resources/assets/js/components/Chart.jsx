import React, { Component } from 'react';
import {connect} from 'react-redux';

import ChartGraph from './ChartGraph.jsx';
import Table from './Table.jsx';
import { startGetYearsSeries, startGetListOfSeries } from '../actions/actions.jsx';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.formatHeading = this.formatHeading.bind(this);
    this.formatTableHeading = this.formatTableHeading.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
  };

  componentDidMount() {
    //dispatch actions to fetch series list and series
    let { dispatch } = this.props;
    dispatch(startGetYearsSeries());
    dispatch(startGetListOfSeries());
  };

  formatHeading() {
    let { listOfSeries } = this.props;
    let formattedHeading = '';
    if (listOfSeries.length == 0) {
      return (
        <h3>No data imported to display</h3>
      );
    // Check number of series and colorize them in headings to match graph lines
    } else if (listOfSeries.length == 1) {
      formattedHeading = (<b className="line-color-1">{listOfSeries[0].seriesName}</b>);
    } else if (listOfSeries.length == 2) {
      formattedHeading = listOfSeries.map((item, index) => {
        return (
          <b key ={index} className={`line-color-${index + 1}`}>{item.seriesName} </b>
        );
      });
    };
    return (
      <h3 className="center">Graph for {formattedHeading}</h3>
    );
  };

  formatTableHeading(number) {
    let { listOfSeries } = this.props;
    // render no heading if series doesn`t exist
    if (listOfSeries.length < 1) {
      return null;
    } else {
      // check for async action
      let seriesNumber = number - 1;
      if (!listOfSeries[seriesNumber]) {
        return null;
      };
      return (
        <h4 className="center">{this.props.listOfSeries[seriesNumber].seriesName}</h4>
      );
    };
  };

  resetFilter() {
    let { dispatch } = this.props;
    dispatch(startGetYearsSeries());
  };

  render() {
    // initialize series arrays
    let series1 = [];
    let series2 = [];
    let series = [];
    // check that list and series have been fetched
    if (this.props.series && this.props.listOfSeries.length > 0) {
      series1 = this.props.series[this.props.listOfSeries[0].collectionId];
      // check that 2nd series exists
      if (this.props.listOfSeries.length > 1) {
        series2 = this.props.series[this.props.listOfSeries[1].collectionId];
      };
      // check if all series have been fetched to avoid error on async action
      if (series1 != undefined && series2 != undefined && series2.length > 0) {
        // case with 2 series
        series = [series1, series2];
      } else {
        // case with 1 series
        series = series1;
      };
    };

    return (
      <div>
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            {this.formatHeading()}
            <ChartGraph series={series} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2 col-sm-offset-10">
            <button className="btn btn-primary" onClick={() => {this.resetFilter()}}>Reset</button>
          </div>
          <div className="col-sm-4 col-sm-offset-2">
            {this.formatTableHeading(1)}
            <Table series={series1} />
          </div>
          <div className="col-sm-4">
            {this.formatTableHeading(2)}
            <Table series={series2} />
          </div>
        </div>
      </div>
    );
  };
};

export default connect(
  (state) => {
    return {
      series: state.series,
      listOfSeries: state.listOfSeries
    };
  }
)(Chart);
