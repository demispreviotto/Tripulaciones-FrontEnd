import axios from "axios"
const API_URL = "http://localHost:8080/users/";

const register = async (data) => {
    const res = await axios.post(API_URL + 'register', data)
    return res.data;
}
const login = async (data) => {
    const res = await axios.post(API_URL + 'login', data)
    if (res.data) {
        localStorage.setItem("token", JSON.stringify(res.data.token));
        localStorage.setItem("user", JSON.stringify(res.data.user));
    }
    return res.data;
}
const getProfile = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const config = { headers: { Authorization: token } }
    const res = await axios.get(API_URL + 'profile', config);
    return res.data;
}
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
    return res.data
};

const authService = {
    register,
    login,
    getProfile,
    logout,
};

export default authService