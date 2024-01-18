import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getIncidenceById } from "../../../features/incidence/incidenceSlice";
import Loading from "../../common/Loading/Loading";
import Icon_GoBack from "../../../assets/Icon_GoBack";
import data from "../../../assets/data/dataEs.json";
import "./IncidencePage.scss";

const IncidencePage = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const incidence = useSelector((state) => state.incidence.incidence);
  const incidenceStatus = data.incidenceStatus;
  const service = null;
  useEffect(() => {
    dispatch(getIncidenceById(_id));
  }, []);

  if (!incidence) {
    return <Loading />;
  }
  const updatedDate = new Date(incidence.updatedAt).toLocaleDateString();
  const updatedTime = new Date(incidence.updatedAt).toLocaleTimeString();
  const createdDate = new Date(incidence.createdAt).toLocaleDateString();
  const createdTime = new Date(incidence.createdAt).toLocaleTimeString();
  const progressPercentage =
    (incidenceStatus.indexOf(incidence.status) / (incidenceStatus.length - 1)) *
    100;

  const handleAsign = (e) => {
    e.preventDefault();
    console.log("Asignar Servicio");
  };

  return (
    <div>
      <header>
        <Icon_GoBack />
      </header>
      <div className="incidences">
        <div className="greetings">
          <div className="incidences">
            <h2>{incidence.summary}</h2>
          </div>
          <div className="messages">
            <h4>{service || "Servicio no asignado"}</h4>
          </div>
          <div>Ver Conversaciones</div>
        </div>
      </div>
      {service ? (
        <div className="card">
          <p>{incidence.category}</p>
          <p>{incidence.status}</p>
        </div>
      ) : (
        <button type="button" onClick={handleAsign}>
          Asignar Servicio
        </button>
      )}
      <div className="status-container">
        <div className="status-bar">
          <div
            className="progress"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        {incidenceStatus.map((status) => (
          <p key={status}>{status}</p>
        ))}
        <p>
          {createdDate} {createdTime}
        </p>
        <p>
          {updatedDate} {updatedTime}
        </p>
        <p>
          {incidence.buildingId?.address} {incidence.buildingId?.number}
        </p>
      </div>
    </div>
  );
};

export default IncidencePage;
