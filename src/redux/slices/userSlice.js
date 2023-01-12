import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    userLogged: {},
    pets: [],
  },
  reducers: {
    getUser: (state, action) => {
      state.userLogged = action.payload.user;
      state.pets = action.payload.pets;
    },
    userByID: (state, action) => {
      state.user = action.payload.user;
      state.pets = action.payload.pets;
    },
    postUser: (state, action) => {
      state.user = action.payload.user;
      state.pets = action.payload.pets;
    },
    putUser: (state, action) => {
      state.user = action.payload.user;
      state.pets = action.payload.pets;
    },
    deletUser: (state, action) => {
      state.user = action.payload.user;
      state.pets = action.payload.pets;
    },
  },
});

export const { getUser, userByID, postUser, putUser, deletUser } =
  userSlice.actions;
export default userSlice.reducer;
