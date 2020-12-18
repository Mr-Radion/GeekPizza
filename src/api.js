import axios from 'axios';

export const fetchPizzasApi = () => {
  axios.get('http://localhost:3001/db.json').then(({ data }) => {
    return data;
  });
};

