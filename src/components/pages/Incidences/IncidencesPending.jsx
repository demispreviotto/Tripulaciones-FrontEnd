import React, { useState } from "react";

const IncidencesPending = ({ incidences }) => {
  // hacer map que traiga incidencias sin completar/completar
  const [activeTab, setActiveTab] = useState("incidences");

  const getNonCompletedIncidencesCount = (incidenceIds) => {
    return incidenceIds.filter((incidence) => incidence.status !== "Completada")
      .length;
  };

  const getCompletedIncidencesCount = (incidenceIds) => {
    return incidenceIds.filter((incidence) => incidence.status === "Completada")
      .length;
  };

  const getCompletionPercentage = (completedCount, totalCount) => {
    return totalCount !== 0
      ? Math.round((completedCount / totalCount) * 100)
      : 0;
  };

  const totalNonCompletedIncidences = buildings.reduce((acc, building) => {
    return acc + getNonCompletedIncidencesCount(building.incidenceIds);
  }, 0);

  return (
    <>
      <div className="container-content">
        {totalNonCompletedIncidences > 0 ? (
          buildings.map((building) => {
            if (getNonCompletedTodosCount(building.incidenceIds) > 0) {
              const completedCount = getCompletedTodosCount(
                building.incidenceIds
              );
              const totalCount = building.incidenceIds.length;
              const completionPercentage = getCompletionPercentage(
                completedCount,
                totalCount
              );

              return (
                <div
                  className="card"
                  key={building._id}
                  onClick={() => navigate(`/fincas/id/${building._id}`)}
                >
                  <h5>
                    {building.address} {building.number}
                  </h5>
                  <div className="progress-bar">
                    <div
                      className="progress"
                      style={{ width: `${completionPercentage}%` }}
                    ></div>
                  </div>
                  <div className="card-details">
                    <p>{completionPercentage}% completadas</p>
                    <p>
                      {completedCount}/{totalCount}
                    </p>
                  </div>
                </div>
              );
            }
          })
        ) : (
          <p>No hay tareas pendientes</p>
        )}
        <BuildingMore url={"/fincas"} />
      </div>
    </>
  );
};

export default IncidencesPending;
