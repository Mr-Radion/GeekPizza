const initialState = {
  category: 0,
  sortBy: 'popular',
};

const filters = (state = initialState, action) => {
  // action = {
  //   type: 'SET_SORT_BY',
  //   payload: 'price'
  // }
  if (action.type === 'SET_SORT_BY') {
    return {
      ...state, // We take all the old data from the state
      sortBy: action.payload, // Replacement
    };
  }
  return state; // If there are no changes, then we return the old values
};

export default filters;