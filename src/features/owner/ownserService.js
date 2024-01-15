import axios from "axios";
const API_URL = "http://localHost:8080/owners/";

const token = JSON.parse(localStorage.getItem("token"));

const create = async (data) => {
  const res = await axios.post(API_URL + "create", data, {
    headers: {
      Authorization: token,
    },
  });
  return res.data;
};

const ownerService = {
  create,
};

export default ownerService;
