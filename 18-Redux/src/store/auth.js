import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
};

const authreducer = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true; //Here we are mutating the original state and also not returning all data fields for original state . So all this merging and returning new state done by react redux toolkit @reduxjs/toolkit ***BEHIND THE SCENE***  SO This is advantage of using it
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authreducer.actions;
export default authreducer.reducer;
