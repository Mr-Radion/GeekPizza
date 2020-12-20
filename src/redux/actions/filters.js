// Action Creator - function returning an object
export const setSortBy = (name) => ({
  type: 'SET_SORT_BY',
  payload: name,
});

// Action 
// const setSortBy = ({
//   type: 'SET_SORT_BY',
//   payload: name,
// });

export const setCategory = (catType) => ({
  type: 'SET_CATEGORY',
  payload: catType,
});
