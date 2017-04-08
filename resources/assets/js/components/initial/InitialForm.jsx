import React, {Component} from 'react';
import {connect} from 'react-redux';
import 'MainStatsContainer' from '../MainStatsContainer';

export default class InitialForm extends Component {

  constructor(props){
    super(props);
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
