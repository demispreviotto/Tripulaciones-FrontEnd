import axios from "axios";

const API_URL = "http://localHost:8080/owners/";

const token = JSON.parse(localStorage.getItem("token"));

const createOwner = async (data) => {
  const res = await axios.post(API_URL + "create", data, {
    headers: {
      Authorization: token,
    },
  });
  return res.data;
};

const getAllOwners = async () => {
  const res = await axios.get(API_URL + "getAll", {
    headers: {
      Authorization: token,
    },
  });
  return res.data;
};

const deleteOwnerById = async (id) => {
  const res = await axios.delete(API_URL + "delete/" + id, {
    headers: {
      Authorization: token,
    },
  });
  return res.data;
};

const updateOwnerById = async (data) => {
  const res = await axios.put(API_URL + "update/" + data._id, data, {
    headers: {
      Authorization: token,
    },
  });
  return res.data;
};

const OwnerService = {
  createOwner,
  getAllOwners,
  deleteOwnerById,
  updateOwnerById,
};

export default OwnerService;
