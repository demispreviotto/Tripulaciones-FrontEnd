import React from "react";
import Preloader from "../pages/Preloader/Preloader";

const BuildingTodos = ({ buildings }) => {
  if (!buildings) {
    return <Preloader />;
  }
  const getPendingTodosCount = (todoIds) => {
    return todoIds.filter((todo) => !todo.completed).length;
  };

  return (
    <>
      {buildings.map((building) => (
        <div key={building._id}>
          <h5>
            {building.address} {building.number}
          </h5>
          <p>Tareas Pendientes: {getPendingTodosCount(building.todoIds)}</p>
          <p>Tareas Totales: {building.todoIds.length}</p>
        </div>
      ))}
    </>
  );
};

export default BuildingTodos;
