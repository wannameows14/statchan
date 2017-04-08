import React, { Component } from 'react';
import {connect} from 'react-redux';
import ChartPage from './charts/LineChartComponent';
import TablePage from './table/StatsTable';

class MainStatsContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    if(!this.props.chartData || !this.props.tableData) return '';
    return (
      <div>
        <ChartPage chartData={this.props.chartData}/>
        <TablePage tableData={this.props.tableData}/>
      </div>
    );
  }
};
export default connect((state)=>{
  return {
    tableData:state.tableData,
    chartData:state.chartData,
  }
})(MainStatsContainer);