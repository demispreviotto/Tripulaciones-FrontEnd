import React, { useState } from "react";
import BuildingIncidences from "./BuildingIncidences";
import BuildingTodos from "./BuildingTodos";

const BuildingCheck = ({ buildings }) => {
  const [active, setActive] = useState(true);

  const getNonCompletedTodosCount = (todoIds) => {
    return todoIds.filter((todo) => todo.status !== "Completada").length;
  };
  const totalNonCompletedTodos = buildings.reduce((acc, building) => {
    return acc + getNonCompletedTodosCount(building.todoIds);
  }, 0);
  const getNonCompletedIncidencesCount = (incidenceIds) => {
    return incidenceIds.filter((incidence) => incidence.status !== "Completada")
      .length;
  };
  const totalNonCompletedIncidences = buildings.reduce((acc, building) => {
    return acc + getNonCompletedIncidencesCount(building.incidenceIds);
  }, 0);

  return (
    <>
      <div className="container">
        <nav>
          <div className="container-header" onClick={() => setActive(!active)}>
            <h4>Tareas</h4>
            <p>{totalNonCompletedTodos}</p>
          </div>
          <div className="container-header" onClick={() => setActive(!active)}>
            <h4>Incidencias</h4>
            <p>{totalNonCompletedIncidences}</p>
          </div>
          {/* <p >Incidentes</p> */}
        </nav>
        {active ? (
          <BuildingTodos buildings={buildings} />
        ) : (
          <BuildingIncidences buildings={buildings} />
        )}
      </div>
    </>
  );
};

export default BuildingCheck;
