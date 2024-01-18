import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBuildingById } from "../../../features/building/buildingSlice";
import Icon_GoBack from "../../../assets/Icon_GoBack";
import "./Incidences.scss";
import IncidencesPending from "./IncidencesPending";
import IncidencesClosed from "./IncidencesClosed";

const Incidences = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const building = useSelector((state) => state.building.building);

  useEffect(() => {
    dispatch(getBuildingById(_id));
  }, []);

  const [activeTab, setActiveTab] = useState("pending");

  const totalNonCompletedIncidences = Array.isArray(building.incidenceIds)
    ? building.incidenceIds.filter((incidence) => incidence.status !== "Completada").length
    : 0;

  const totalCompletedIncidences = Array.isArray(building.incidenceIds)
    ? building.incidenceIds.filter((incidence) => incidence.status === "Completada").length
    : 0;

  return (
    <>
      <header>
        <Icon_GoBack />
      </header>
      <div className="title-incidence-container">
        <div className="incidences">
          <h1>
            Incidencias en {building.address}, {building.number}
          </h1>
        </div>
        <div className="messages">
          <h4>575 mensajes optimizados</h4>
        </div>
      </div>
      <div className="container">
        <nav>
          <div
            className={`container-header ${activeTab === "pending" ? "active" : ""
              }`}
            onClick={() => setActiveTab("pending")}
          >
            <h4>Pendientes</h4>
            <p>{totalNonCompletedIncidences}</p>
          </div>
          <div
            className={`container-header ${activeTab === "closed" ? "active" : ""
              }`}
            onClick={() => setActiveTab("closed")}
          >
            <h4>Cerradas</h4>
            <p>{totalCompletedIncidences}</p>
          </div>
        </nav>
        {activeTab === "incidences" ? (
          <IncidencesPending incidences={building.incidenceIds} />
        ) : (
          <IncidencesClosed incidences={building.incidenceIds} />
        )}
      </div>
    </>
  );
};

export default Incidences;
