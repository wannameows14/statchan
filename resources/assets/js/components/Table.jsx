import React, { Component } from 'react';
import { connect } from 'react-redux';

import { startGetSeries } from '../actions/actions.jsx';

class Table extends Component {
  constructor(props) {
    super(props);
    this.handleRowData = this.handleRowData.bind(this);
    this.filterDate = this.filterDate.bind(this);
    this.filterValue = this.filterValue.bind(this);

    this.state = {
      series: this.props.series,
      orderDate: 'asc',
      orderValues: 'initial'
    };
  };

  componentWillReceiveProps(nextProps) {
    // sync series state for table display and sorting with props
    this.setState({
      series: nextProps.series
    });
  };

  handleRowData(dataObj) {
    // handler for fetching year or month data
    if (dataObj.day) {
      return null;
    };
    let { dispatch } = this.props;
    dispatch(startGetSeries(dataObj));
  };

  filterDate() {
    // filter function, sorts rows by date
    if (this.state.orderDate === 'asc') {
      let newOrder = this.state.series.sort(function(a, b) {
        return b.x - a.x;
      });
      this.setState({
        series: newOrder,
        orderDate: 'desc'
      });
    } else if (this.state.orderDate === 'desc'){
      let newOrder = this.state.series.sort(function(a, b) {
        return a.x - b.x;
      });
      this.setState({
        series: newOrder,
        orderDate: 'asc'
      });
    };
  };

  filterValue() {
    // filter function, sorts rows by value
    if (this.state.orderValues === 'initial' || this.state.orderValues === 'desc') {
      let newOrder = this.state.series.sort(function(a, b) {
        return parseFloat(a.y) - parseFloat(b.y);
      });
      this.setState({
        series: newOrder,
        orderValues: 'asc'
      });
    } else if (this.state.orderValues === 'asc') {
      let newOrder = this.state.series.sort(function(a, b) {
        return parseFloat(b.y) - parseFloat(a.y);
      });
      this.setState({
        series: newOrder,
        orderValues: 'desc'
      });
    };
  };

  createTable() {
    let series = this.state.series;
    if (!series || series.length < 1) {
      return null;
    } else {
      let formattedTableRows = series.map((item) => {
        return (
          <tr key={item.x + item.y} className="table-data-row" onClick={() => { this.handleRowData(item._id) }}>
            <td>
              {item.x}
            </td>
            <td>
              {(Math.round(item.y * 100)/100).toFixed(4)}
            </td>
          </tr>
        );
      });
      return (
        <table className="table table-hover">
          <thead>
            <tr className="table-header-row">
              <th onClick={() => this.filterDate()}>Date</th>
              <th onClick={() => {this.filterValue()}}>Value</th>
            </tr>
          </thead>
          <tbody>
            {formattedTableRows}
          </tbody>
        </table>
      );
    };
  };

  render() {
    return (
      <div className="values-table">
        {this.createTable()}
      </div>
    );
  };
};

export default connect()(Table);
