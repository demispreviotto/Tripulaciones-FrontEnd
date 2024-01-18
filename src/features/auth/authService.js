import axios from "axios";
const API_URL = "https://tripulaciones-backend-dev-qfjx.2.us-1.fl0.io/users/";

const register = async (data) => {
  const res = await axios.post(API_URL + "register", data);
  return res.data;
};
const login = async (data) => {
  const res = await axios.post(API_URL + "login", data);
  if (res.data) {
    localStorage.setItem("token", JSON.stringify(res.data.token));
    localStorage.setItem("user", JSON.stringify(res.data.user));
  }
  return res.data;
};
const getLoggedUser = async () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const config = { headers: { Authorization: token } };
  const res = await axios.get(API_URL + "profile", config);
  return res.data;
};
const logout = async () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const res = await axios.delete(API_URL + "logout", {
    headers: {
      Authorization: token,
    },
  });
  if (res.data) {
    localStorage.clear();
  }
  return res.data;
};
const update = async (data) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const res = await axios.put(API_URL + "update", data, {
    headers: {
      Authorization: token,
    },
  });
  return res.data;
};

const authService = {
  register,
  login,
  getLoggedUser,
  logout,
  update,
};

export default authService;
