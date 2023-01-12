import { createSlice } from "@reduxjs/toolkit";

export const petSlice = createSlice({
  name: "pet",
  initialState: {
    pets: [],
    pet: {}
  },
  reducers: {
    getPets: (state, action) => {
      state.pets = action.payload;
    },
    petByID: (state, action) => {
      state.pet = action.payload;
    },
    petsLookingPartner: (state, action) => {
      state.pets = action.payload;
    },
    postPet: (state, action) => {
      state.pet = action.payload;
    },
    putPet: (state, action) => {
      state.pet = action.payload;
    },
    deletPet: (state, action) => {
      state.pet = action.payload;
    },
  },
});

export const { getPets, petByID, petsLookingPartner, postPet, putPet, deletPet } = petSlice.actions;
export default petSlice.reducer;
