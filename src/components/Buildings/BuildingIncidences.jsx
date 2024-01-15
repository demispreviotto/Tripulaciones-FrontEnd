import React from "react";
import Preloader from "../pages/Preloader/Preloader";

const BuildingIncidences = ({ buildings }) => {
  if (!buildings) {
    return <Preloader />;
  }

  const getNonCompletedIncidencesCount = (incidenceIds) => {
    return incidenceIds.filter((incidence) => incidence.status !== "Completada").length;
  };

  const getCompletedIncidencesCount = (incidenceIds) => {
    return incidenceIds.filter((incidence) => incidence.status === "Completada").length;
  };

  const getCompletionPercentage = (completedCount, totalCount) => {
    return totalCount !== 0 ? Math.round((completedCount / totalCount) * 100) : 0;
  };

  const totalNonCompletedIncidences = buildings.reduce((acc, building) => {
    return acc + getNonCompletedIncidencesCount(building.incidenceIds);
  }, 0);

  return (
    <>
      <h4>Incidencias</h4>
      <p>{totalNonCompletedIncidences}</p>

      {buildings.map((building) => {
        const completedCount = getCompletedIncidencesCount(building.incidenceIds);
        const totalCount = building.incidenceIds.length;
        const nonCompletedCount = getNonCompletedIncidencesCount(building.incidenceIds);
        const completionPercentage = getCompletionPercentage(completedCount, totalCount);

        return (
          <div key={building._id}>
            <h5>
              {building.address} {building.number}
            </h5>
            <p>{completedCount}/{totalCount} completadas</p>
            <p>{nonCompletedCount} pendientes</p>
            <p>{completionPercentage}% completadas</p>
          </div>
        );
      })}
    </>
  );
};

export default BuildingIncidences;
