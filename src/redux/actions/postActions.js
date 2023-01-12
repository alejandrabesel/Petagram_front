import axios from "axios";
import { getAllPosts, getPostById, postPost, reactions,comments } from "../slices/postSlice";
const URL = "http://localhost:4000/";

// const URL = process.env.REACT_APP_URL_API;

// export const getPosts = () => (dispatch) => {
//   axios(`${URL}post`)
//     .then((res) => {
//       dispatch(getAllPosts(res.data));
//     })
//     .catch((e) => console.log(e.message));
// };

export const getPosts = ()=>{
  return async (dispatch)=>{
      const json = await axios.get(`${URL}post`);
      return dispatch(getAllPosts(json.data));
  }
};

export const getPostsByPetId = (petId)=>{
  return async (dispatch)=>{
      try {
          const json = await axios.get(`${URL}post/${petId}`);
          return dispatch (getPostById(json.data));
      } catch (error){
          console.log(error);
      }
  }
};

export const createPost = (petId, payload)=> async (dispatch)=>{
  try{
      console.log(payload)
      await axios.post(`${URL}post/${petId}`, payload);
      return dispatch (postPost());
  }catch (error){
      console.log (error)
      return alert ("Post not created");
  }
};

export const addReactions = (id, payload)=> async(dispatch)=>{
  try {
      console.log(payload)
      await axios.put(`${URL}post/reaction/${id}`, payload);
      return dispatch(reactions());
  }catch(error){
      console.log (error)
      return alert("Error adding reactions")
  }
};

export const addComment = (id, payload)=> async(dispatch)=>{
  try {
      console.log(payload)
      await axios.put(`${URL}post/comment/${id}`, payload);
      return dispatch(comments());
  }catch(error){
      console.log (error)
      return alert("Error adding comment")
  }
};