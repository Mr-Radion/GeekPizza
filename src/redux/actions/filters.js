// Action Creator - function returning an object
export const setSortBy = ({ type, order }) => ({
  type: 'SET_SORT_BY',
  payload: { type, order },
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
