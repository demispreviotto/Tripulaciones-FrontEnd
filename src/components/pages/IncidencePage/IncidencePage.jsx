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

  const handleConversations = (e) => {
    e.preventDefault();
    console.log("Ver conversaciones");
  };
  const handleAsign = (e) => {
    e.preventDefault();
    console.log("Asignar Servicio");
  };
  const currentStatusIndex = incidenceStatus.findIndex(
    (status) => status === incidence.status
  );
  const shouldHighlightStatus = (currentIndex, targetIndex) => {
    return currentIndex <= targetIndex;
  };

  return (
    <div>
      <header>
        <Icon_GoBack />
      </header>
      <div className="incidences-page">
        <div className="greetings">
          <div className="incidences-title">
            <h2>{incidence.summary}</h2>
            <p className="created-date">{createdDate}</p>
          </div>
          <div className="messages">
            <p>{service || "Servicio no asignado"}</p>
          </div>
          <button onClick={handleConversations}>Ver Conversaciones</button>
        </div>
        {service ? (
          <div className="card">
            <p>{incidence.category}</p>
            <p>{incidence.status}</p>
          </div>
        ) : (
          <div className="card" type="button" onClick={handleAsign}>
            Mmm.. <br /> parece que no hay servicios asignados <br /> <u>Toca para asignar Servicio</u>
          </div>
        )}
        <div className="status-container">
          <h4>Estado de la incidencia</h4>
          <div className="status-content">
            <div className="status-bar">
              <div
                className="progress"
                style={{ height: `${progressPercentage}%` }}
              ></div>
              <div className="dot"></div>
            </div>
            <div className="status-stage">
              {incidenceStatus.map((status, index) => (
                <div key={index}>
                  <p className={shouldHighlightStatus(
                    index,
                    currentStatusIndex
                  ) ? "highlighted-status" : ""}
                  >{status}</p>
                  {status === incidence.status
                    && <p> {updatedDate} {updatedTime}
                    </p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncidencePage;
