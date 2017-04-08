import React, {Component} from 'react';
import {connect} from 'react-redux';
import {startGetData} from '../../actions/actions';
import DatePicker from "react-bootstrap-date-picker";
import MainStatsContainer from '../MainStatsContainer';

class InitialForm extends Component {

  constructor(props){
    super(props);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
  }

  handleChange1(value) {
    this.setState({
      date1: value,
    });
  }

  handleChange2(value) {
    this.setState({
      date2: value,
    });
  }

  componentDidUpdate() {
    if ((this.state.date1 && this.state.date2) && (this.state.date1 != this.state.date2)){
      this.props.dispatch(startGetData());
    } else {
      console.log('choose valid dates!');
    }
  }

  render() {
    console.log('initial');
    return (
      <div>
        <h1>Datepickers</h1>
        <MainStatsContainer/>
      </div>
    )
  }
}

export default connect()(InitialForm);
