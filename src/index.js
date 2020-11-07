import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import { createStore } from 'redux';
import { Provider } from 'react-redux';
import store from './redux/store';

import './scss/app.scss';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

// function counterReducer(state = { value: 0 }, action) {
//   switch (action.type) {
//     case 'incremented':
//       return { value: state.value + 1 }
//     case 'decremented':
//       return { value: state.value - 1 }
//     default:
//       return state
//   }
// }

// let store = createStore(counterReducer)

// store.subscribe(() => console.log('Хранилище изменилось', store.getState()))

// store.dispatch({ type: 'incremented' })

// store.dispatch({ type: 'incremented' })

// store.dispatch({ type: 'decremented' })

// console.log(store.getState());

// const inc = () => {
//   store.dispatch({
//     type: 'incremented'
//   });
// }

// store.subscribe(() => console.log('Хранилище изменилось', store.getState()));
