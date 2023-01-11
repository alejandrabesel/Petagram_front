import axios from "axios";

import { getAllPosts, getPostById } from "../slices/postSlice";
const URL = process.env.REACT_APP_URL_API;
export const getPosts = () => (dispatch) => {
  axios(`${URL}post`)
    .then((res) => {
      dispatch(getAllPosts(res.data));
    })
    .catch((e) => console.log(e.message));
};
