import axios from "axios";
const API_URL = "https://tripulaciones-backend-dev-qfjx.2.us-1.fl0.io/services/";

const token = JSON.parse(localStorage.getItem("token"));

const create = async (data) => {
  const res = await axios.post(API_URL + "create", data, {
    headers: {
      Authorization: token,
    },
  });
  return res.data;
};

const update = async (data) => {
  const res = await axios.put(API_URL + "update", data, {
    headers: {
      Authorization: token,
    },
  });
  return res.data;
};

const getAll = async () => {
  const res = await axios.get(API_URL + "getAll", {
    headers: {
      Authorization: token,
    },
  });
  return res.data;
};

const serviceService = {
  create,
  update,
  getAll,
};

export default serviceService;
