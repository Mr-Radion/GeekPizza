import filtersReducer from "./reducers/filters";
import pizzasReducer from "./reducers/pizzas";

const rootReducer = combineReducers({
  filtersReducer,
  pizzasReducer
});

export default rootReducer;