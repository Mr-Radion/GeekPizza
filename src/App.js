import React from 'react';

import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

// class App extends React.Component {
//   componentDidMount() {
//     axios.get('http://localhost:3000/db.json').then(({ data }) => {
//       // this.props.dispatch(setPizzasAction(data.pizzas));
//       this.props.setPizzas(data.pizzas);
//     });
//   }

//   render() {
//     return (
//       <div className="wrapper">
//         <Header />
//         <div className="content">
//           <Route exact path="/" render={() => <Home items={this.props.items} />} />
//           <Route exact path="/cart" component={Cart} />
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateProps = (state) => {
//   return {
//     items: state.pizzas.items,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
// setPizzas;
// return {
//   setPizzas: (items) => dispatch(setPizzasAction(items)),
// dispatch,
// setPizzas = (items) => ({
//   type: 'SET_PIZZAS',
//   payload: items,
// });
//   };
// };

// connect() - <App items={state.pizzas.items} filters={state.filters} >

// export default connect(mapStateProps, mapDispatchToProps)(App);
export default App;
