import axios from "axios"

const API_URL = "http://localHost:8080/buildings/";

const token = JSON.parse(localStorage.getItem("token"));

const createBuilding = async (data) => {
    const res = await axios.post(API_URL + 'createBuilding', data, {
        headers: {
            Authorization: token,
        },
    })
    return res.data;
}

const getAllBuildings = async () => {
    const res = await axios.get(API_URL + 'getAllBuildings', {
        headers: {
            Authorization: token,
        },
    })
    return res.data;
};

const getBuildingById = async (_id) => {
    const res = await axios.get(API_URL + "getBuildingById/" + _id, {
        headers: {
            Authorization: token,
        },
    })
    return res.data;
}

const updateBuildingById = async (data) => {
    const res = await axios.put(API_URL + 'updateBuilding/' + data._id, data, {
        headers: {
            Authorization: token,
        },
    });
    return res.data;
};

const deleteBuildingById = async (_id) => {
    const res = await axios.delete(API_URL + 'deleteBuildingById/' + _id, {
        headers: {
            Authorization: token,
        },
    });
    return res.data;
};

const buildingService = {
    createBuilding,
    getAllBuildings,
    getBuildingById,
    updateBuildingById,
    deleteBuildingById,
};

export default buildingService