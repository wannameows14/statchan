import React, {Component} from 'react';
import DatePicker from "react-bootstrap-date-picker";

export default class InitialForm extends Component {

  constructor(props){
    super(props);
    this.state = {
    }
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
      console.log('yeah!');
    } else {
      console.log('choose valid dates!');
    }
  }

  render() {
    return (
      <div>
        <DatePicker value={this.state.date1} onChange={this.handleChange1} />
        <DatePicker value={this.state.date2} onChange={this.handleChange2} />
      </div>
    )
  }
}