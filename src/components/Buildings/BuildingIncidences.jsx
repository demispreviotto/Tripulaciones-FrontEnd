import React from "react";
import Preloader from "../pages/Preloader/Preloader";

const BuildingIncidences = ({ buildings }) => {
  if (!buildings) {
    return <Preloader />;
  }
  const getPendingIncidenceCount = (incidenceIds) => {
    return incidenceIds.filter((incidence) => incidence.status !== "Completed")
      .length;
  };

  return (
    <>
      {console.log(buildings)}
      {buildings.map((building) => (
        <div key={building._id}>
          <h5>
            {building.address} {building.number}
          </h5>
          <p>
            Incidencias Pendientes:
            {getPendingIncidenceCount(building.incidenceIds)}
          </p>
          <p>Incidencias Totales:{building.incidenceIds.length}</p>
        </div>
      ))}
    </>
  );
};

export default BuildingIncidences;
