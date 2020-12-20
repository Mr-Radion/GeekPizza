import axios from 'axios';
// import { fetchPizzasApi } from "../../api";

export const setLoaded = (payload) => ({
  type: 'SET_LOADING',
  payload,
});

export const fetchPizzas = () => (dispatch) => {
  dispatch(setLoaded(false));
  axios.get('http://localhost:3001/db.json').then(({ data }) => {
    dispatch(setPizzas(data.pizzas));
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
