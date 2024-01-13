import axios from "axios";
const API_URL = "http://localHost:8080/services/";

const create = async (data) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const config = { headers: { Authorization: token } };
  console.log(data)
  const res = await axios.post(API_URL + "create", data, config);
  return res.data;
};

// const getById = async (_id) => {
//   const token = JSON.parse(localStorage.getItem("token"));
//   const config = { headers: { Authorization: token } };
//   const res = await axios.get(API_URL + "profile", config);
//   return res.data;
// };

const update = async (data) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const res = await axios.put(API_URL + "update", data, {
    headers: {
      Authorization: token,
    },
  });
  return res.data;
};

const serviceService = {
  create,
  //   getById,
  update,
};

export default serviceService;
