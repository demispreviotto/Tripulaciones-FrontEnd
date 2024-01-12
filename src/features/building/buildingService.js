import axios from "axios"
const API_URL = "http://localHost:8080/buildings/";

const createBuilding = async (data) => {
    const res = await axios.post(API_URL + 'register', data)
    return res.data;
}


const authService = {
    createBuilding,
};

export default authService