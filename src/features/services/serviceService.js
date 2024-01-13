import axios from "axios";
const API_URL = "http://localHost:8080/services/";

const token = JSON.parse(localStorage.getItem("token"));

const create = async (data) => {
  console.log(data)
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

const serviceService = {
  create,
  update,
};

export default serviceService;
