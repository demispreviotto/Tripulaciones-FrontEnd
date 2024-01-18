import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllIncidences } from "../../../features/incidence/incidenceSlice";
import IncidenceCreate from "../IncidenceCreate/IncidenceCreate";
import { useParams } from "react-router-dom";
import { getBuildingById } from "../../../features/building/buildingSlice";
import Icon_GoBack from "../../../assets/Icon_GoBack";
import "./Incidences.scss";
import IncidencesPending from "./IncidencesPending";
import IncidencesClosed from "./IncidencesClosed";

const Incidences = () => {
  const dispatch = useDispatch();
  const building = useSelector((state) => state.building.building);
  const { _id } = useParams();

  useEffect(() => {
    dispatch(getBuildingById(_id));
    dispatch(getAllIncidences(_id));
  }, [_id]);

  const [activeTab, setActiveTab] = useState("pending");

  const getNonCompletedIncidencesCount = (incidenceIds) => {
    return incidenceIds.filter((incidence) => incidence.status !== "Completada")
      .length;
  };
  const totalNonCompletedIncidences = building.reduce((acc, building) => {
    return acc + getNonCompletedIncidencesCount(building.incidenceIds);
  }, 0);
  const getCompletedIncidencesCount = (incidenceIds) => {
    return incidenceIds.filter((incidence) => incidence.status === "Completada")
      .length;
  };
  const totalCompletedIncidences = building.reduce((acc, building) => {
    return acc + getCompletedIncidencesCount(building.incidenceIds);
  });

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
      {/* <div className="incidences-div">
        {building?.incidenceIds?.length === 0 ? (
          <div className="no-incidences">
            <p>No hay incidencias en esta finca</p>
          </div>
        ) : (
          <>
            <nav>
              <div
                className={`container-header ${
                  activeTab === "pending" ? "active" : ""
                }`}
                onClick={() => setActiveTab("todos")}
              >
                <h4>Pendientes</h4>
                <p>{totalNonCompletedTodos}</p>
              </div>
              <div
                className={`container-header ${
                  activeTab === "closed" ? "active" : ""
                }`}
                onClick={() => setActiveTab("incidences")}
              >
                <h4>Cerradas</h4>
                <p>{totalNonCompletedIncidences}</p>
              </div>
            </nav>
            <div className="card-container-incidences">
              {building.incidenceIds?.map((incidence) => {
                const dateObject = new Date(incidence.createdAt);
                const options = {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                };
                const localeDateString = dateObject.toLocaleDateString(
                  "es-ES",
                  options
                );
                return (
                  <div key={incidence._id} className="incidence-card">
                    <div className="title-date">
                      <h1>titulo incidencia</h1>
                      <h3>{localeDateString}</h3>
                    </div>
                    <h4>{incidence.category}</h4>
                  </div>
                );
              })}
            </div>
            <IncidenceCreate />
          </>
        )}
      </div> */}
      <div className="container">
        <nav>
          <div
            className={`container-header ${
              activeTab === "pending" ? "active" : ""
            }`}
            onClick={() => setActiveTab("pending")}
          >
            <h4>Pendientes</h4>
            <p>{totalNonCompletedIncidences}</p>
          </div>
          <div
            className={`container-header ${
              activeTab === "closed" ? "active" : ""
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
