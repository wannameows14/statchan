import superagent from 'superagent';

// Mock

const tableData = require('../data-mocks/table-monthly.js');
const chartData = require('../data-mocks/chart-monthly.js');

import { GET_DATA } from '../reducers/types.jsx';

const getDataRoute = '/api/getdata';

// Start async getting list of series
export let startGetData = () => {
	return (dispatch, getState) => {
		dispatch(getData({
			tableData,
			chartData
		}));
    // superagent.get(getDataRoute)
    //   .end((err, response) => {
    //     if(err) {
		// 			console.log('get error');
    //       // dispatch(getListOfSeriesError());
    //     } else if(response.ok) {
    //       dispatch(getData(response));
    //     };
    // });


  };
};

//Sync action to move async reponse to state
export let getData = (data) => {
  return {
    type: GET_DATA,
    payload: data
  };
};

//
// // Show user error
// export let getListOfSeriesError = () => {
//   return {
//     type: GET_LIST_OF_SERIES_ERROR
//   };
// };
// // Start async entry data by years aggregation
// export let startGetYearsSeries = () => {
// 	return (dispatch, getState) => {
// 		superagent.get('/api/get-all-years')
// 			.end((err, response) => {
// 				if (err) {
// 					// dispatch(getSeriesError());
// 				} else if(response.ok) {
// 					dispatch(getSeries(response.body));
// 				};
// 			});
// 	};
// };
// // Start async action to fetch aggregated data on demand
// export let startGetSeries = (dataObj) => {
// 	// data object to configure server aggregation function
// 	let data = {};
// 	if (dataObj.year) {
// 		data.year = dataObj.year;
// 	};
// 	if (dataObj.month) {
// 		data.month = dataObj.month;
// 	};
// 	return (dispatch, getState) => {
// 		superagent.post('/api/get-data')
// 			.send(data)
// 			.end((err, response) => {
// 				if (err) {
// 					// dispatch(getSeriesError());
// 				} else if(response.ok) {
// 					dispatch(getSeries(response.body));
// 				};
// 			});
// 	};
// };
// // Sync action to move series to state
// export let getSeries = (seriesArray) => {
// 	return {
// 		type: GET_SERIES,
// 		payload: seriesArray
// 	};
// };
