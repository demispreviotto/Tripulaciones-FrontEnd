import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createTodo } from "../../../features/todo/todoSlice";
import { getAllBuildings } from "../../../features/building/buildingSlice";
import Loading from "../../common/Loading/Loading";

const TodoCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const buildings = useSelector((state) => state.building.buildings);
  const messageTodo = useSelector((state) => state.todo.message);
  const statusCreateTodo = useSelector((state) => state.todo.status);
  const initialValue = {
    title: "",
    description: "",
    completed: false,
    doorId: "",
    buildingId: "",
    ownerId: "",
  };
  const [fromData, setFromData] = useState(initialValue);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    dispatch(getAllBuildings());
  }, []);

  const handleOnChange = (e) => {
    setFromData({ ...fromData, [e.target.name]: e.target.value });
  };

  const handleActive = (e) => {
    e.preventDefault();
    setActive(!active);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(fromData);
    dispatch(createTodo(fromData));
  };
  useEffect(() => {
    if (messageTodo === "Tarea creada exitosamente") {
      const timeoutId = setTimeout(() => {
        navigate("/tareas/");
        setIsSubmitting(false);
        setFromData(initialValue);
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [statusCreateTodo]);

  if (!buildings) {
    return <Loading />;
  }

  return (
    <>
      {!active ? (
        <button type="submit" onClick={handleActive}>
          Crear
        </button>
      ) : (
        <div>
          <h2>Crear Tarea:</h2>
          <form onSubmit={handleOnSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Título"
              onChange={handleOnChange}
            />
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="10"
              maxLength={255}
              placeholder="Descripción..."
              onChange={handleOnChange}
            ></textarea>
            <label htmlFor="status">Estado</label>
            <input
              type="checkbox"
              name="completed"
              id="completed"
              onChange={handleOnChange}
            />
            <select name="buildingId" id="buildingId" onChange={handleOnChange}>
              {buildings.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.address} {item.number}
                </option>
              ))}
            </select>
            <button type="submit" disabled={isSubmitting}>
              Crear
            </button>
            {messageTodo && <p className={statusCreateTodo}>{messageTodo}</p>}
          </form>
        </div>
      )}
    </>
  );
};

export default TodoCreate;
