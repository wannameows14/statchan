import { GET_LIST_OF_SERIES, GET_LIST_OF_SERIES_ERROR } from './types.jsx';

export let listReducer = (state = [], action) => {
  switch (action.type) {
      case GET_LIST_OF_SERIES:
        return action.payload;
        break;
      case GET_LIST_OF_SERIES_ERROR:
        return {};
        break;
      default:
        return state;
        break;
  };
};
