import React, {Component} from 'react';
import {connect} from 'react-redux';
import {startGetData} from '../../actions/actions';
import DatePicker from "react-bootstrap-date-picker";
import MainStatsContainer from '../MainStatsContainer';

<<<<<<< HEAD
const DateStyle = {
  width: '100%',
}

const LiStyle = {
  display: 'inline-block',
  listStyle: 'none',
  margin: 10,
  width: '45%'
}

export default class InitialForm extends Component {

  constructor(props){
    super(props);
    this.state = {
    }
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
  }

  handleChangeStart(value) {
    this.setState({
      dateStart: value,
    });
  }

  handleChangeEnd(value) {
    this.setState({
      dateEnd: value,
    });
  }

  componentDidUpdate() {
    if ((this.state.dateStart && this.state.dateEnd) &&
        (this.state.dateStart < this.state.dateEnd)){
      console.log('yeah!');
    } else {
      console.log('choose valid dates!');
    }
  }

  render() {
    console.log('initial');
    return (
      <div>
          <li style={LiStyle}>
            <h1>From: </h1>
            <DatePicker value={this.state.dateStart} autoFocus={true} showClearButton={false} onChange={this.handleChangeStart} style={DateStyle} />
          </li>
          <li style={LiStyle}>
            <h1>To: </h1>
            <DatePicker value={this.state.dateEnd} showClearButton={false} onChange={this.handleChangeEnd} style={DateStyle} />
          </li>
      </div>
    )
  }
}

export default connect()(InitialForm);
