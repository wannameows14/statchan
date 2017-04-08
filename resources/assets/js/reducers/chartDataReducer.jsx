import { GET_DATA } from './types.jsx';

export let chartDataReducer = (state = [], action) => {
  switch (action.type) {
      case GET_DATA:
          let chartData = action.payload.chartData;
          let keys = Object.keys(chartData.data);
          let values = Object.values(chartData.data);
          chartData.labels = keys;
          chartData.values = values;
          return chartData;
      default:
        return state;
  };
};
