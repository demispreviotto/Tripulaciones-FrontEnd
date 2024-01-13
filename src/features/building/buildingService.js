import axios from "axios"
const API_URL = "http://localHost:8080/buildings/";

const createBuilding = async (data) => {
    const res = await axios.post(API_URL + 'register', data)
    return res.data;
}
const getBuildingById = async (_id) => {
    const res = await axios.get(API_URL + _id)
    return res.data;
}


const authService = {
    createBuilding,
    getBuildingById,
};

export default authService