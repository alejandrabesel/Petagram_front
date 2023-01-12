import { createSlice } from "@reduxjs/toolkit";

export const specieRaceSlice = createSlice({
  name: "specieRace",
  initialState: {
    species: [],
    race: []

  },
  reducers: {
    species: (state, action) => {
      state.species = action.payload;
    },
    postSpecie: (state, action) => {
      state.species = action.payload;
    },
    race: (state, action) => {
      state.race = action.payload;
    },
    postRace: (state, action) => {
      state.race = action.payload;
    },
  },
});

export const { species, postSpecie, race, postRace } = specieRaceSlice.actions;
export default specieRaceSlice.reducer;
