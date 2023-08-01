import { createSlice } from "@reduxjs/toolkit";
import tuits from "./tuits.json";

const currentUser = {
    "userName": "NASA",
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
    initialState: {tuits: tuits},
    reducers: {
        createTuit(state, action) {
          state.tuits.unshift({
            ...action.payload,
            ...templateTuit,
            _id: (new Date()).getTime(),
          })
        },

        deleteTuit(state, action) {
            const index = state.tuits
               .findIndex(tuit =>
                  tuit._id === action.payload);
            state.tuits.splice(index, 1);
          },

        likeTuit(state, action) {
            let currentTuit = state.tuits.find((tuit) => tuit._id == action.payload)
            if(currentTuit.liked) {
                currentTuit.likes -= 1;
                currentTuit.liked = false;
            }
            else {
                currentTuit.likes += 1;
                currentTuit.liked = true;
            }
        }
       
      }
     
});

export const {createTuit, deleteTuit, likeTuit} = tuitSlice.actions;
export default tuitSlice.reducer