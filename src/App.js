import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
// import store from "./redux/store";
import { connect } from 'react-redux';

import { setPizzas as setPizzasAction } from './redux/actions/pizzas';
import { Header } from './components';
import { Home, Cart } from './pages';

// function App() {
//   const [pizzas, setPizzas] = React.useState([]);

//   React.useEffect(() => {
//     axios.get('http://localhost:3000/db.json').then(({ data }) => {
//       setPizzas(data.pizzas);
//     });

// fetch('http://localhost:3000/db.json')
//   .then((resp) => resp.json())
//   .then((json) => {
//     setPizzas(json.pizzas);
//   });
//   }, []);

//   return (
//     <div className="wrapper">
//       <Header />
//       <div className="content">
//         <Route exact path="/" render={() => <Home items={pizzas} />} />
//         <Route exact path="/cart" component={Cart} />
//       </div>
//     </div>
//   );
// }

class App extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      // this.props.dispatch(setPizzasAction(data.pizzas));
      this.props.setPizzas(data.pizzas);
    });
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route exact path="/" render={() => <Home items={this.props.items} />} />
          <Route exact path="/cart" component={Cart} />
        </div>
      </div>
    );
  }
}

const mapStateProps = (state) => {
  return {
    items: state.pizzas.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  // setPizzas;
  return {
    setPizzas: (items) => dispatch(setPizzasAction(items)),
    // dispatch,
    // setPizzas = (items) => ({
    //   type: 'SET_PIZZAS',
    //   payload: items,
    // });
  };
};

export default connect(mapStateProps, mapDispatchToProps)(App);
