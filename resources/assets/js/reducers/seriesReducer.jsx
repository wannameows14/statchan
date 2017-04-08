import { GET_SERIES } from './types.jsx';

export let seriesReducer = (state = [], action) => {
  switch (action.type) {
      case GET_SERIES:
        return action.payload;
      default:
        return state;
  };
};
