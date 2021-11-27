import { combineReducers } from "redux";
import rocketReducer from "./rocket/rocket.reducer";
import searchFieldReducer from "./searchField/searchField.reducer";

export default combineReducers({
  rocket:rocketReducer,
  searchField:searchFieldReducer
});
