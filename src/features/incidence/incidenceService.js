import axios from "axios";

const API_URL = "http://localHost:8080/incidences/";

const token = JSON.parse(localStorage.getItem("token"));

const createIncidence = async (data) => {
    const res = await axios.post(API_URL + 'createIncidence', data, {
        headers: {
            Authorization: token,
        },
    });
    return res.data;
};
const createManualIncidence = async (data) => {
    const res = await axios.post(API_URL + 'createManualIncidence', data, {
        headers: {
            Authorization: token,
        },
    });
    // console.log(res.data)
    return res.data;
};
const getAllIncidences = async () => {
    const res = await axios.get(API_URL + 'getAllIncidences', {
        headers: {
            Authorization: token,
        },
    });
    return res.data;
};

const getIncidenceById = async (_id) => {
    const res = await axios.get(API_URL + 'getIncidenceById/' + _id, {
        headers: {
            Authorization: token,
        },
    });
    return res.data;
};

const updateIncidence = async (data) => {
    const res = await axios.put(API_URL + 'updateIncidence/' + data._id, data, {
        headers: {
            Authorization: token,
        },
    });
    return res.data;
};

const deleteIncidence = async (_id) => {
    const res = await axios.delete(API_URL + 'deleteIncidence/' + _id, {
        headers: {
            Authorization: token,
        },
    });
    return res.data;
};

const incidenceService = {
    createIncidence,
    createManualIncidence,
    getAllIncidences,
    getIncidenceById,
    updateIncidence,
    deleteIncidence,
};

export default incidenceService;