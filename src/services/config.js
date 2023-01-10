import axios from "axios";

const queryPath = process.env.PUBLIC_URL_BACK;

const getQuery = (direction, token) => {
  return axios.get(`${queryPath}/${direction}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

const openGetQuery = (direction) => {
  const res = axios.get(`${queryPath}/${direction}`);
  return res;
};

const postQuery = (direction, body, token) => {
  return axios.post(`${queryPath}/${direction}`, body, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

const postQueryDev = (direction, body, token) => {
  return axios.post(`${queryPath}/${direction}`, body, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

const openPostQuery = (path, body) => {
  return axios.post(`${queryPath}/${path}`, body);
};

const patchQuery = (direction, body, token) => {
  return axios.patch(`${queryPath}/${direction}`, body, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

const putQuery = (direction, body) => {
  return axios.put(`${queryPath}/${direction}`, body);
};

const openPatchQuery = (direction) => {
  return axios.patch(`${queryPath}/${direction}`);
};

const deleteQuery = (direction, token) => {
  return axios.delete(`${queryPath}/${direction}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export default queryPath;

export {
  getQuery,
  postQuery,
  postQueryDev,
  patchQuery,
  putQuery,
  deleteQuery,
  openGetQuery,
  openPostQuery,
  openPatchQuery,
};
