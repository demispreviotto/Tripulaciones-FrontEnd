import axios from "axios";

const API_URL = "http://localHost:8080/doors/";

const createDoor = async (data) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const res = await axios.post(API_URL + "create", data, {
    headers: {
      Authorization: token,
    },
  });
  return res.data;
};

const getAllDoors = async () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const res = await axios.get(API_URL + "getAll", {
    headers: {
      Authorization: token,
    },
  });
  return res.data;
};

const getDoorById = async (_id) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const res = await axios.get(API_URL + "getDoorById/" + _id, {
    headers: {
      Authorization: token,
    },
  });
  return res.data;
};

const updateDoorById = async (data) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const res = await axios.put(API_URL + "updateDoor/" + data._id, data, {
    headers: {
      Authorization: token,
    },
  });
  return res.data;
};

const deleteDoorById = async (_id) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const res = await axios.delete(API_URL + "deleteDoorById/" + _id, {
    headers: {
      Authorization: token,
    },
  });
  return res.data;
};

const DoorService = {
  createDoor,
  getAllDoors,
  getDoorById,
  updateDoorById,
  deleteDoorById,
};

export default DoorService;
