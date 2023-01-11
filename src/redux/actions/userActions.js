import axios from "axios";
import { getUserApi } from "../slices/userSlice";
const URL = process.env.REACT_APP_URL_API;
export const getUser = (name) => (dispatch) => {
  axios
    .get(`${URL}user?name=${name}`)
    .then((res) => {
      const payload = {};
      payload.user = res.data.user;
      payload.pets = res.data.user.pets;
      dispatch(getUserApi(payload));
    })
    .catch((e) => console.log(e.message));
};
