import { createStore, combineReducers } from "redux";

const reducers = combineReducers({
  prop1: function (state, action) {
    return {
      example: "It's working!",
    };
  },

  prop2: function (state, action) {
    return {
      example: "It's working again!",
    };
  },
});

function store() {
  return createStore(reducers);
}

export default store;
