import axios from 'axios';
// import { fetchPizzasApi } from "../../api";

export const setLoaded = (payload) => ({
  type: 'SET_LOADING',
  payload,
});

export const fetchPizzas = (sortBy, category) => (dispatch) => {
  dispatch(setLoaded(false));
  axios
    .get(
      `http://localhost:3001/pizzas?${
        category !== null ? `category=${category}` : ''
      }&_sort=${sortBy.type}&_order=desk`,
    )
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });

  // fetch('http://localhost:3000/db.json')
  //   .then((resp) => resp.json())
  //   .then((json) => {
  //     setPizzas(json.pizzas);
  //   });

  // fetchPizzasApi().then();
};

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});
