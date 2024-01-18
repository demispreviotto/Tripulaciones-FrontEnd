import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getBuildingById } from "../../../features/building/buildingSlice";
import Icon_GoBack from "../../../assets/Icon_GoBack";
import "./Incidences.scss";
import BuildingMore from "../../Buildings/BuildingMore";
import Loading from "../../common/Loading/Loading";

const Incidences = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { _id } = useParams();
  const [activeTab, setActiveTab] = useState("pending");
  const building = useSelector((state) => state.building.building);

  useEffect(() => {
    dispatch(getBuildingById(_id));
  }, []);

  if (!building) {
    return <Loading />;
  }

  const incidences = building.incidenceIds;
  const totalPendingIncidences = incidences.filter(
    (incidence) => incidence.status !== "completed"
  );
  const totalNonCompletedIncidences = incidences.filter(
    (incidence) => incidence.status !== "completed"
  ).length;
  const totalCompletedIncidences = incidences.filter(
    (incidence) => incidence.status === "completed"
  ).length;

  return (
    <>
      <header>
        <Icon_GoBack />
      </header>
      <div className="incidences">
        <div className="greetings">
          <div className="incidences">
            <h2>
              Incidencias en {building.address}, {building.number}
            </h2>
          </div>
          <div className="messages">
            <h4>575 mensajes optimizados</h4>
          </div>
        </div>
        <div className="building-check-container">
          <div className="building-check">
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
              {activeTab === "pending" ? (
                <div className="container-content">
                  {totalNonCompletedIncidences > 0 ? (
                    building.incidenceIds.map((incidence) => {
                      if (incidence.status !== "completed") {
                        const formattedDate = new Date(
                          incidence.createdAt
                        ).toLocaleDateString();
                        return (
                          <div
                            className="card"
                            key={incidence._id}
                            onClick={() =>
                              navigate(`/incidencias/id/${incidence._id}`)
                            }
                          >
                            <h5>{incidence.summary.slice(0, 20)}...</h5>
                            <div className="card-details">
                              <p>{incidence.status}</p>
                              <p>{formattedDate}</p>
                            </div>
                          </div>
                        );
                      }
                    })
                  ) : (
                    <p>No hay incidencias pendientes</p>
                  )}
                  <BuildingMore
                    text={"Ver todas las incidencias"}
                    url={"/incidencias/"}
                  />
                </div>
              ) : (
                <div className="container-content">
                  {totalCompletedIncidences > 0 ? (
                    building.incidenceIds.map((incidence) => {
                      if (incidence.status === "completed") {
                        return (
                          <div
                            className="card"
                            key={incidence._id}
                            onClick={() =>
                              navigate(`/incidencias/id/${incidence._id}`)
                            }
                          >
                            <h5>{incidence.sumary}</h5>
                            <div className="card-details">
                              <p>{incidence.status}</p>
                              <p>{incidence.createdAt}</p>
                            </div>
                          </div>
                        );
                      }
                    })
                  ) : (
                    <p>No hay incidencias pendientes</p>
                  )}
                  <BuildingMore url={"/incidencias/"} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Incidences;
