import axios from 'axios';
// import { fetchPizzasApi } from "../../api";

export const fetchPizzas = () => (dispatch) => {
  axios.get('http://localhost:3001/db.json').then(({ data }) => {
    dispatch(setPizzas(data.pizzas));
  });

  // fetchPizzasApi().then();
};

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});
