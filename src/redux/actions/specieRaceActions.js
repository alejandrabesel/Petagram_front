import axios from "axios";
import {species, postSpecie, race, postRace} from "./../slices/specieRaceSlice"

const URL = "http://localhost:3001/";

export const getSpecies = ()=>{
  return async (dispatch)=>{
      const json = await axios.get(`${URL}specie`);
      return dispatch (species(json.data));
  }
};

export const createSpecie = (payload)=> async (dispatch)=>{
  try{
      console.log(payload)
      await axios.post(`${URL}specie`, payload);
      return dispatch (postSpecie());
  }catch (error){
      console.log (error)
      return alert ("Specie not created");
  }
};

export const getRace = ()=>{
  return async (dispatch)=>{
      const json = await axios.get(`${URL}race`);
      return dispatch (race(json.data));
  }
};

export const createRace = (payload)=> async (dispatch)=>{
  try{
      console.log(payload)
      await axios.post(`${URL}race`, payload);
      return dispatch (postRace());
  }catch (error){
      console.log (error)
      return alert ("Race not created");
  }
};
