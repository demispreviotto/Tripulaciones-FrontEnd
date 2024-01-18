import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getBuildingById } from "../../../features/building/buildingSlice";
import Icon_Predictions from "../../../assets/Icon_Predictions";
import Icon_Incidences from "../../../assets/Icon_Incidences";
import Icon_Todos from "../../../assets/Icon_Todos";
import Icon_Meetings from "../../../assets/Icon_Meetings";
import Icon_Documents from "../../../assets/Icon_Documents";
import Icon_Providers from "../../../assets/Icon_Providers";
import Icon_Microphone from "../../../assets/Icon_Microphone";
import Icon_GoBack from "../../../assets/Icon_GoBack";
import "./BuildingPage.scss";
import Loading from "../../common/Loading/Loading";

const tokenLocal = JSON.parse(localStorage.getItem("token"));
const BuildingPage = () => {
  const token = useSelector((state) => state.auth.token);
  const { _id } = useParams();
  const building = useSelector((state) => state.building.building);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (token === tokenLocal) {
      dispatch(getBuildingById(_id));
    }
  }, []);

  if (!building) {
    return <Loading />;
  }

  const handleOnClickDetails = () => {
    navigate(`/fincas/id/${_id}/detalles`);
  };

  const handleOnClickIncidences = () => {
    navigate(`/fincas/id/${_id}/incidencias`);
  };

  return (
    <>
      <header>
        <Icon_GoBack />
      </header>
      <div className="building-page">
        <div className="address-building">
          <h1>
            {`${building.address} ${building.number}`}, {building.zipCode}
          </h1>
          <h3>
            H30459839 <br /> {building.doorIds.length} puertas
          </h3>
          <button onClick={handleOnClickDetails}>Ver detalles</button>
        </div>
        <div className="card-container-building">
          <div className="card-content">
            <div className="card">
              <Icon_Predictions />
              <h5>Predicciones</h5>
            </div>
            <div className="card" onClick={handleOnClickIncidences}>
              <Icon_Incidences />
              <h5>Incidencias</h5>
              {building.incidenceIds.length > 0 && <p className="balloon">{building.incidenceIds.length}</p>}
            </div>
            <div className="card">
              <Icon_Todos />
              <h5>Tareas</h5>
              {building.todoIds.length > 0 && <p className="balloon">{building.todoIds.length}</p>}
            </div>
            <div className="card">
              <Icon_Meetings />
              <h5>Reuniones</h5>
            </div>
            <div className="card">
              <Icon_Documents />
              <h5>Documentos</h5>
            </div>
            <div className="card">
              <Icon_Providers />
              <h5>Proveedores</h5>
            </div>
          </div>
          <div className="search-bar">
            <input type="search" placeholder="Buscar" />
            <Icon_Microphone />
          </div>
        </div>
      </div>
    </>
  );
};

export default BuildingPage;
