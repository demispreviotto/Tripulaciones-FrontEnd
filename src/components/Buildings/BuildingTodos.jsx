import React from "react";
import Loading from "../common/Loading/Loading";
import { useNavigate } from "react-router-dom";

const BuildingTodos = ({ buildings }) => {
  if (!buildings) {
    return <Loading />;
  }
  const navigate = useNavigate()

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
      {/* // <div className="container"> */}
      {/* <div className="container-header">
        <h4>Tareas</h4><p>{totalNonCompletedTodos}</p>
      </div> */}
      <div className="container-content">
        {buildings.map((building) => {
          const completedCount = getCompletedTodosCount(building.todoIds);
          const totalCount = building.todoIds.length;
          // const nonCompletedCount = getNonCompletedTodosCount(building.todoIds);
          const completionPercentage = getCompletionPercentage(completedCount, totalCount);

          return (
            <div className="card" key={building._id} onClick={() => navigate(`/fincas/id/${building._id}`)}>
              <h5>
                {building.address} {building.number}
              </h5>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${completionPercentage}%` }}></div>
              </div>
              <div className="card-details">
                <p>{completionPercentage}% completadas</p>
                <p>{completedCount}/{totalCount} completadas</p>
                {/* <p>{nonCompletedCount} pendientes</p> */}
              </div>
            </div>
          );
        })}
      </div>
      {/* // </div> */}
    </>
  );
};

export default BuildingTodos;
