import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    pets: [],
  },
  reducers: {
    getUserApi: (state, action) => {
      state.user = action.payload.user;
      state.pets = action.payload.pets;
    },
  },
});

export const { getUserApi } = userSlice.actions;
export default userSlice.reducer;
