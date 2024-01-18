import React, { useState } from "react";
import BuildingIncidences from "./BuildingIncidences";
import BuildingTodos from "./BuildingTodos";

const BuildingCheck = ({ buildings }) => {
  const [activeTab, setActiveTab] = useState("todos");

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
          <div
            className={`container-header ${
              activeTab === "todos" ? "active" : ""
            }`}
            onClick={() => setActiveTab("todos")}
          >
            <h4>Tareas</h4>
            <p>{totalNonCompletedTodos}</p>
          </div>
          <div
            className={`container-header ${
              activeTab === "incidences" ? "active" : ""
            }`}
            onClick={() => setActiveTab("incidences")}
          >
            <h4>Incidencias</h4>
            <p>{totalNonCompletedIncidences}</p>
          </div>
        </nav>
        {activeTab === "todos" ? (
          <BuildingTodos buildings={buildings} />
        ) : (
          <BuildingIncidences buildings={buildings} />
        )}
      </div>
    </>
  );
};

export default BuildingCheck;
