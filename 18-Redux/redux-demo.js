import redux from "redux";
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 5,
    };
  }
  return state;
};
const store = redux.createStore(counterReducer);
//Upto Now we create a store in which we have our actual data(central data) **remember we only can manipulate by reducer function so we already declare. And for accessing this state we need component(function) and store will subscribe them then they get access to get state
const counterSubscriber = () => {
  console.log(store.getState());
};
//This above function(component) is actual function that we use in our project

store.subscribe(counterSubscriber);
store.dispatch({ type: "INCREMENT" }); //Without dispatch this counterSubscriber not work or we can se this reducer function not work we only get initial state like store.getState()
// store.getState();//This only give initial state not dispatched value

/*
This is another Example

import redux from "redux";
const logginReducer = (state = { isloggin: false }, action) => {
  if (action.type === "ISLOGGIN") {
    return {
      isloggin: true,
    };
  }
  return state;
};
const store = redux.createStore(logginReducer);
const logginSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};
console.log(store.getState());
store.subscribe(logginSubscriber);
store.dispatch({ type: "ISLOGGIN" });
*/
