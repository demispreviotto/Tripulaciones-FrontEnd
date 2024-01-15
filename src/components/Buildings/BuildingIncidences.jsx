import React from "react";
import Loading from "../common/Loading/Loading";
import { useNavigate } from "react-router-dom";

const BuildingIncidences = ({ buildings }) => {
  if (!buildings) {
    return <Loading />;
  }
  const navigate = useNavigate()

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
      {/* <div className="container"> */}
      {/* <div className="container-header">
          <h4>Incidencias</h4>
          <p>{totalNonCompletedIncidences}</p>
        </div> */}
      <div className="container-content">
        {buildings.map((building) => {
          const completedCount = getCompletedIncidencesCount(building.incidenceIds);
          const totalCount = building.incidenceIds.length;
          const nonCompletedCount = getNonCompletedIncidencesCount(building.incidenceIds);
          const completionPercentage = getCompletionPercentage(completedCount, totalCount);

          return (
            <div className="card" key={building._id} onClick={() => navigate(`/fincas/id/${building._id}`)}>
              <h5>
                {building.address} {building.number}
              </h5>
              {/* <progress id={building.id} max={100} value={completionPercentage}></progress> */}
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
      {/* </div> */}
    </>
  );
};

export default BuildingIncidences;
