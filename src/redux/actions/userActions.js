import axios from "axios";
import {getUsers, userByID, postUser, putUser, deletUser} from "./../slices/userSlice"

const URL = "http://localhost:3001/";

// const URL = process.env.REACT_APP_URL_API;
// export const getUser = (name) => (dispatch) => {
//   axios
//     .get(`${URL}user?name=${name}`)
//     .then((res) => {
//       const payload = {};
//       payload.user = res.data.user;
//       payload.pets = res.data.user.pets;
//       dispatch(getUserApi(payload));
//     })
//     .catch((e) => console.log(e.message));
// };

export const getAllUsers = ()=>{
  return async (dispatch)=>{
      const json = await axios.get(`${URL}user`);
      return dispatch (getUsers(json.data));
  }
};

export const getUserById = (id)=>{
  return async (dispatch)=>{
      try {
          const json = await axios.get(`${URL}user/${id}`);
          return dispatch (userByID(json.data));
      } catch (error){
          console.log(error);
      }
  }
};

export const createUser = (payload)=> async (dispatch)=>{
  try{
      console.log(payload)
      await axios.post(`${URL}user`, payload);
      return dispatch (postUser());
  }catch (error){
      console.log (error)
      return alert ("User not created");
  }
};

export const updateUser = (id, payload)=> async(dispatch)=>{
  try {
      console.log(payload)
      await axios.patch(`${URL}user/${id}`, payload);
      return dispatch(putUser());
  }catch(error){
      console.log (error)
      return alert("Error updating user")
  }
};

export const deleteUser = (id)=>{
  return async (dispatch)=>{
      try{
          await axios.delete(`${URL}user/${id}`);
          return dispatch (deletUser());
      }catch (error){
          console.log(error);
          return alert("Error deleting user")
      }
  }
};

