import React, { Component } from 'react';
import axios from 'axios';
import superagent from 'superagent';
import {connect} from 'react-redux';
import { startGetListOfSeries } from '../actions/actions.jsx';

import ImportList from './ImportList.jsx';

class Import extends Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleSeriesName = this.handleSeriesName.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.deleteSeries = this.deleteSeries.bind(this);

    this.state = {
      seriesName: '',
      errorName: '',
      errorFile: '',
      dataFile: false,
      dropCollectionError: ''
    };
  };

  componentDidMount() {
    let { dispatch } = this.props;
    // Get list of series
    dispatch(startGetListOfSeries());
  };

  handleFileChange(event) {
    // track state of file for displaying error
    if (event.target.files[0]) {
      this.setState({
        dataFile: true
      });
    };
  };

  onFormSubmit(event) {
    event.preventDefault();
    let { dispatch } = this.props;
    // Reset all errors
    this.setState({
      errorFile: '',
      errorName: '',
      successMsg: '',
      errorMsg: ''
    });

    if (this.props.seriesList.length >= 2) {
      this.setState({
        errorMsg: 'Maximum number of series limited to 2'
      });
      return;
    };

    // Error checks
    if (this.state.seriesName === '') {
      this.setState({
        errorName: 'Please choose a name for data series'
      });
      return;
    } else {
      this.setState({
        errorName: ''
      });
    };

    if (!this.state.dataFile) {
      this.setState({
        errorFile: 'Please choose a file for import'
      });
      return;
    } else {
      this.setState({
        errorFile: ''
      });
    };

    // create form data for data upload
    let formData = new FormData();
    const files = this.filesInput.files;
    formData.append('dataFile', files[0]);
    formData.append('name', this.state.seriesName);
    // Make ajax request to post data
    superagent.post('/api')
      .send(formData)
      .end((err, response) => {
        if(err) {
          this.setState({
            errorMsg: response.body.err,
          });
        } else if(response.ok) {
          // reset messages
          this.filesInput.value = null;
          this.setState({
            successMsg: 'Everything was ok',
            seriesName: '',
            dataFile: false,
          });
          // refetch list of series
          dispatch(startGetListOfSeries());
        };
    });
  };
  // delete action handler, action is fired from child
  deleteSeries(id) {
    let { dispatch } = this.props;
    // Ajax call to delete series
    superagent.get('/api/delete/' + id)
      .end((err, response) => {
        if(err) {
          this.setState({
            dropCollectionError: response.body.err
          })
        } else if(response.ok) {
          // reset messages
          this.setState({
            successMsg: '',
            errorName: '',
            errorFile: '',
            errorMsg: ''
          });
          // refetch list of series
          dispatch(startGetListOfSeries());
        }
      });
  };

  handleSeriesName(event) {
    this.setState({
      seriesName: event.target.value
    });
  };

  render() {
    return (
      <div className="row">
        <div className="col-sm-6 col-sm-offset-3">
          <form onSubmit={this.onFormSubmit}>
            <div className="form-group">
              <label htmlFor="seriesName">Enter series name</label>
              <input
                type="text"
                value={this.state.seriesName}
                onChange={this.handleSeriesName}
                className="form-control"
                id="seriesName"
                placeholder="Series Name" />
            </div>
            <p className="bg-warning">{this.state.errorName}</p>
            <input
              type="file"
              ref={(input) => { this.filesInput = input; }}
              name="file"
              accept=".csv"
              onChange={this.handleFileChange}/>
            <p className="bg-warning">{this.state.errorFile}</p>
            <input type="submit" className="btn btn-primary" value="Upload" />
          </form>
          <div className="warning-block">
            <p className="bg-success">{this.state.successMsg}</p>
            <p className="bg-warning">{this.state.errorMsg}</p>
          </div>
          <ImportList deleteSeries={this.deleteSeries} list={this.props.seriesList}/>
          <div className="warning-bock">
            <p className="bg-warning">{this.state.dropCollectionError}</p>
          </div>
        </div>
      </div>
    );
  };
};

export default connect(
  (state) => {
    return {
      seriesList: state.listOfSeries
    }
  }
)(Import);
