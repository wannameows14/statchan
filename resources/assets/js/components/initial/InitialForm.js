import React, {Component} from 'react';
import {connect} from 'react-redux';

class InitialForm extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Datepickers</h1>
      </div>
    )
  }
}
export default connect()(InitialForm);
