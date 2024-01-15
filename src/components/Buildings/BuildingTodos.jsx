import React from "react";
import Preloader from "../pages/Preloader/Preloader";

const BuildingTodos = ({ buildings }) => {
  if (!buildings) {
    return <Preloader />;
  }

  const getNonCompletedTodosCount = (todoIds) => {
    return todoIds.filter((todo) => todo.status !== "Completada").length;
  };

  const getCompletedTodosCount = (todoIds) => {
    return todoIds.filter((todo) => todo.completed).length;
  };

  const getCompletionPercentage = (completedCount, totalCount) => {
    return totalCount !== 0 ? Math.round((completedCount / totalCount) * 100) : 0;
  };

  const totalNonCompletedTodos = buildings.reduce((acc, building) => {
    return acc + getNonCompletedTodosCount(building.todoIds);
  }, 0);

  return (
    <>
      <h4>Tareas</h4><p>{totalNonCompletedTodos}</p>
      {buildings.map((building) => {
        const completedCount = getCompletedTodosCount(building.todoIds);
        const totalCount = building.todoIds.length;
        // const nonCompletedCount = getNonCompletedTodosCount(building.todoIds);
        const completionPercentage = getCompletionPercentage(completedCount, totalCount);

        return (
          <div key={building._id}>
            <h5>
              {building.address} {building.number}
            </h5>
            <p>{completedCount}/{totalCount} completadas</p>
            {/* <p>{nonCompletedCount} pendientes</p> */}
            <p>{completionPercentage}% completadas</p>
          </div>
        );
      })}
    </>
  );
};

export default BuildingTodos;
