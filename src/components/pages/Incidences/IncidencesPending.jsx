import React from "react";

const IncidencesPending = ({ incidences }) => {
  const totalNonCompletedIncidences = incidences.filter(
    (incidence) => incidence.status !== "received"
  );

  return <>{console.log(totalNonCompletedIncidences)}</>;
};

export default IncidencesPending;
