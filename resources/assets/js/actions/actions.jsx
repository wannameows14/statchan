import superagent from 'superagent';

import { GET_DATA } from '../reducers/types.jsx';

// Start async getting list of series
export let startGetListOfSeries = () => {
	return (dispatch, getState) => {
    superagent.get('/api/list')
      .end((err, response) => {
        if(err) {
          dispatch(getListOfSeriesError());
        } else if(response.ok) {
          dispatch(getListOfSeries(response));
        };
    });
  };
};
//Sync action to move async reponse to state
export let getListOfSeries = (seriesList) => {
  return {
    type: GET_LIST_OF_SERIES,
    payload: seriesList.body
  };
};
// Show user error
export let getListOfSeriesError = () => {
  return {
    type: GET_LIST_OF_SERIES_ERROR
  };
};
// Start async entry data by years aggregation
export let startGetYearsSeries = () => {
	return (dispatch, getState) => {
		superagent.get('/api/get-all-years')
			.end((err, response) => {
				if (err) {
					// dispatch(getSeriesError());
				} else if(response.ok) {
					dispatch(getSeries(response.body));
				};
			});
	};
};
// Start async action to fetch aggregated data on demand
export let startGetSeries = (dataObj) => {
	// data object to configure server aggregation function
	let data = {};
	if (dataObj.year) {
		data.year = dataObj.year;
	};
	if (dataObj.month) {
		data.month = dataObj.month;
	};
	return (dispatch, getState) => {
		superagent.post('/api/get-data')
			.send(data)
			.end((err, response) => {
				if (err) {
					// dispatch(getSeriesError());
				} else if(response.ok) {
					dispatch(getSeries(response.body));
				};
			});
	};
};
// Sync action to move series to state
export let getSeries = (seriesArray) => {
	return {
		type: GET_SERIES,
		payload: seriesArray
	};
};
