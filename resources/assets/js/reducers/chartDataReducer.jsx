import { GET_DATA } from './types.jsx';

export let chartDataReducer = (state = [], action) => {
  switch (action.type) {
      case GET_DATA:
        return action.payload.chartData;
      default:
        return state;
  };
};
