import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getBuildingById } from "../../../features/building/buildingSlice";
import Logo_Predicciones from "../../../assets/Logo_Predicciones";
import Logo_Incidencias from "../../../assets/Logo_Incidencias";
import Logo_Tareas from "../../../assets/Logo_Tareas";
import Logo_Reuniones from "../../../assets/Logo_Reuniones";
import Logo_Documentos from "../../../assets/Logo_Documentos";
import Logo_Proveedores from "../../../assets/Logo_Proveedores";
import Micro from "../../../assets/Micro";
import Logo_GoBack from "../../../assets/Logo_GoBack";
import "./BuildingPage.scss";
import Loading from "../../common/Loading/Loading";

const tokenLocal = JSON.parse(localStorage.getItem("token"));
const BuildingPage = () => {
  const token = useSelector((state) => state.auth.token);
  const { _id } = useParams();
  const building = useSelector((state) => state.building.building);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(building)
  useEffect(() => {
    if (token === tokenLocal) {
      dispatch(getBuildingById(_id));
    }
  }, []);

  if (!building) {
    return <Loading />;
  }

  const handleOnClick = () => {
    navigate(`/fincas/id/${_id}/detalles`);
  };

  return (
    <>
      <header>
        <Logo_GoBack />
      </header>
      <div className="building-page">
        <div className="address-building">
          <h1>{`${building.address} ${building.number}`}, {building.zipCode}</h1>
          <h3>H30459839 <br /> {building.doorIds.length} puertas</h3>
          <button onClick={handleOnClick}>
            Ver detalles
          </button>
        </div>
        <div className="card-container-building">
          <div className="card-content">
            <div className="card">
              <Logo_Predicciones />
              <h5>Predicciones</h5>
            </div>
            <div className="card">
              <Logo_Incidencias />
              <h5>Incidencias</h5>
              {building.incidenceIds.length > 0 && <p className="balloon">{building.incidenceIds.length}</p>}
            </div>
            <div className="card">
              <Logo_Tareas />
              <h5>Tareas</h5>
              {building.todoIds.length > 0 && <p className="balloon">{building.todoIds.length}</p>}
            </div>
            <div className="card">
              <Logo_Reuniones />
              <h5>Reuniones</h5>
            </div>
            <div className="card">
              <Logo_Documentos />
              <h5>Documentos</h5>
            </div>
            <div className="card">
              <Logo_Proveedores />
              <h5>Proveedores</h5>
            </div>
          </div>
          <div className="search-bar">
            <input type="search" placeholder="Buscar" />
            <Micro />
          </div>
        </div>
      </div>
    </>
  );
};

export default BuildingPage;
