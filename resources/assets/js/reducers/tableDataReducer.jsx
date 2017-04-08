import { GET_DATA } from './types.jsx';

export let tableDataReducer = (state = [], action) => {
  switch (action.type) {
      case GET_DATA:
        return action.payload.tableData;
      default:
        return state;
  };
};
