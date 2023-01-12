import axios from "axios";
import { getPets, petByID, petsLookingPartner, postPet, putPet, deletPet } from "../slices/petSlice";

const URL = "http://localhost:3001/";

export const getAllPets = ()=>{
  return async (dispatch)=>{
      const json = await axios.get(`${URL}pet`);
      return dispatch (getPets(json.data));
  }
};

export const getPetById = (id)=>{
  return async (dispatch)=>{
      try {
          const json = await axios.get(`${URL}pet/${id}`);
          return dispatch (petByID(json.data));
      } catch (error){
          console.log(error);
      }
  }
};

export const getPetLookingPartner = ()=>{
  return async (dispatch)=>{
      const json = await axios.get(`${URL}looking-partner`);
      return dispatch (petsLookingPartner(json.data));
  }
};

export const createPet = (payload)=> async (dispatch)=>{
  try{
      console.log(payload)
      await axios.post(`${URL}pet`, payload);
      return dispatch (postPet());
  }catch (error){
      console.log (error)
      return alert ("Pet not created");
  }
};

export const updatePet = (id, payload)=> async(dispatch)=>{
  try {
      console.log(payload)
      await axios.put(`${URL}pet/${id}`, payload);
      return dispatch(putPet());
  }catch(error){
      console.log (error)
      return alert("Error updating pet")
  }
};

export const deletePet = (id)=>{
  return async (dispatch)=>{
      try{
          await axios.delete(`${URL}pet/${id}`);
          return dispatch (deletPet());
      }catch (error){
          console.log(error);
          return alert("Error deleting pet")
      }
  }
};


