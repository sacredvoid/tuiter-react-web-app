import { createSlice } from "@reduxjs/toolkit";
import { findTuitsThunk, deleteTuitThunk, createTuitThunk, updateTuitThunk } from "../services/tuits-thunks";

const initialState = {
  tuits: [],
  loading: false
}

const currentUser = {
    "username": "NASA",
    "handle": "@nasa",
    "image": "nasa.jpg",
   };
   
   const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
   }
   

const tuitSlice = createSlice({
    name: 'tuits',
    initialState,
    extraReducers: {
      [findTuitsThunk.pending]:
        (state) => {
          state.loading = true;
          state.tuits = [];
        },
      
      [findTuitsThunk.fulfilled]:
        (state, {payload}) => {
          state.loading = false;
          state.tuits = payload;
        },
      
      [findTuitsThunk.rejected]:
        (state, action) => {
          state.loading = false;
          state.error = action.error;
        },
      
      [deleteTuitThunk.fulfilled]:
        (state, {payload}) => {
          state.loading = false;
          state.tuits = state.tuits.filter(t => t._id !== payload)
        },

      [createTuitThunk.fulfilled]:
        (state, {payload}) => {
          state.loading = false;
          state.tuits.push({...templateTuit,...payload});
        },

      [updateTuitThunk.fulfilled]:
        (state, {payload}) => {
          state.loading = false
          const tuitNdx = state.tuits.findIndex((t) => t._id === payload._id)
          state.tuits[tuitNdx] = {... state.tuits[tuitNdx], ...payload}
        }
    },
    
    reducers: { }
     
});

export const {createTuit, deleteTuit, likeTuit} = tuitSlice.actions;
export default tuitSlice.reducer