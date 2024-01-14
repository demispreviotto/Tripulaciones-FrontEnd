import axios from "axios";

const API_URL = "http://localHost:8080/incidences/";

const token = JSON.parse(localStorage.getItem("token"));

const createIncidence = async (data) => {
    const res = await axios.post(API_URL + 'create', data, {
        headers: {
            Authorization: token,
        },
    });
    return res.data;
};

const getAllIncidences = async () => {
    const res = await axios.get(API_URL + 'getAll', {
        headers: {
            Authorization: token,
        },
    });
    return res.data;
};

const getIncidenceById = async (_id) => {
    const res = await axios.get(API_URL + 'getById/' + _id, {
        headers: {
            Authorization: token,
        },
    });
    return res.data;
};

const updateIncidence = async (data) => {
    const res = await axios.put(API_URL + 'update/' + data._id, data, {
        headers: {
            Authorization: token,
        },
    });
    return res.data;
};

const deleteIncidence = async (_id) => {
    const res = await axios.delete(API_URL + 'delete/' + _id, {
        headers: {
            Authorization: token,
        },
    });
    return res.data;
};

const incidenceService = {
    createIncidence,
    getAllIncidences,
    getIncidenceById,
    updateIncidence,
    deleteIncidence,
};

export default incidenceService;