import axios from "axios";

const API_URL = "http://localhost:8080/todos/";

const token = JSON.parse(localStorage.getItem("token"));

const createTodo = async (data) => {
    const res = await axios.post(API_URL + "create", data, {
        headers: {
            Authorization: token,
        },
    });
    return res.data;
};

const getAllTodos = async () => {
    const res = await axios.get(API_URL + "getAll");
    return res.data;
};

const getTodoById = async (id) => {
    const res = await axios.get(API_URL + "getById/" + id);
    return res.data;
};

const updateTodo = async (id, data) => {
    const res = await axios.put(API_URL + "update/" + id, data, {
        headers: {
            Authorization: token,
        },
    });
    return res.data;
};

const deleteTodo = async (id) => {
    const res = await axios.delete(API_URL + "delete/" + id, {
        headers: {
            Authorization: token,
        },
    });
    return res.data;
};

const todoService = {
    createTodo,
    getAllTodos,
    getTodoById,
    updateTodo,
    deleteTodo,
};

export default todoService;
