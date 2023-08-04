import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, logoutThunk, profileThunk, updateUserThunk, registerUserThunk } from "../services/auth-thunks";


const authSlice = createSlice({
 name: "auth",
 initialState: { currentUser: null },
 reducers: {},
 extraReducers: {
   [loginThunk.fulfilled]: (state, { payload }) => {
    console.log("in auth reducer", payload);
     state.currentUser = payload;
   },
   [logoutThunk.fulfilled]: (state) => {
    state.currentUser = null;
  },
  [profileThunk.fulfilled]: (state, { payload }) => {
    state.currentUser = payload;
  },
  [profileThunk.rejected]: (state, { payload }) => {
    state.currentUser = null;
  },
  [profileThunk.pending]: (state, action) => {
    state.currentUser = null;
  },
  [updateUserThunk.fulfilled]: (state, { payload }) => {
    state.currentUser = payload;
  },
  [registerUserThunk.fulfilled]: (state, { payload }) => {
    console.log("in thunk, reducer",payload);
    state.currentUser = payload;
  },
 },
});
export default authSlice.reducer;