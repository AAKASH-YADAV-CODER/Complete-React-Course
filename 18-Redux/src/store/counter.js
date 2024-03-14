import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterreducer = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++; //Here we are mutating the original state and also not returning all data fields for original state . So all this merging and returning new state done by react redux toolkit @reduxjs/toolkit ***BEHIND THE SCENE***  SO This is advantage of using it
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterreducer.actions;

export default counterreducer.reducer;
