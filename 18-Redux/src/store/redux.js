import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import authReducer from "./auth";

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;

/*
This is without @reduxjs/toolkit only with redux
import { createStore } from "redux"
const initialState = {
  counter: 0,
  showToggle:false
}
const counterReducer = (state={initialState}, action) => {
  if(action.type === "increase"){
    return {
      counter: state.counter + 1,
      showToggle:state.showToggle
    }
    //We always return new state because if we want to mutate it the it create some bug which will we got stuck in it and facing problem in debugging. remember always return all state value and not merge otherwise it gonna neglect that in original state(initialState)
  }
  if(action.type === "increment"){
    return {
      counter: state.counter + action.payload,
      showToggle:state.showToggle
    }
  }
  if(action.type === "decrease"){
    return {
      counter: state.counter - 1,
      showToggle:state.showToggle
    }
  }
  if(action.type === "toggle"){
    return {
      showToggle:true,
      counter: state.counter + 1
      
    }
  }
}
const store = createStore(counterReducer);
export default store;//This store is used at the top of the root which is in index.js

//There are two inbuilt function provided by react redux are :- useSelector(for read State data), useDispatch()
import { useSelector,useDispatch } from 'react-redux';
const counter = useSelector(state => state.counter);
const showToggle = useSelector(state => state.showToggle);

// In Handler function we write useDispatch which give action identifier
const anyHandlerFun... =() => {
  useDispatch({type:"increase or increment or decrease",})
}
//In case there is any value the user manually add (payload Action) ** remember this payload and action.payload same mean spelling if there is value there is should be action.value
const anyHandlerFun... =(e) => {
  useDispatch({type:"increment",payload:e.target.value or 10})
}
 */
