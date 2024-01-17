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
import LogoHeader from "../../../assets/LogoHeader";
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

  // useEffect(() => {
  // }, [building])

  if (!building) {
    return <Loading />;
  }

  const handleOnClick = () => {
    navigate(`/fincas/id/${_id}/detalles`);
  };

  return (
    <>
    <div className="building-header">
      <LogoHeader />
    </div>
      <div className="address-building">
        <h1>{`${building.address} ${building.number}`}</h1>
        <h3>{building.zipCode}</h3>
        <button onClick={handleOnClick}>
          Ver detalles
        </button>
      </div>
      <div className="card-container-building">
        <div className="card-building">
          <Logo_Predicciones />
          <h5>Predicciones</h5>
        </div>
        <div className="card-building">
          <Logo_Incidencias />
          <h5>Incidencias</h5>
          {/* <div>
            <h5>Incidencias: {building.incidenceIds.length}</h5>
            <Link to={`/finca/${_id}/incidencias`}>Ver incidencias</Link>
            <h5>{building.zipCode}</h5>
          </div> */}
        </div>
        <div className="card-building">
          <Logo_Tareas />
          <h5>Tareas</h5>
        </div>
        <div className="card-building">
          <Logo_Reuniones />
          <h5>Reuniones</h5>
        </div>
        <div className="card-building">
          <Logo_Documentos />
          <h5>Documentos</h5>
        </div>
        <div className="card-building">
          <Logo_Proveedores />
          <h5>Proveedores</h5>
        </div>
        <div className="search-bar">
          <input type="search" placeholder="Buscar" className="placeholder" />
          <Micro />
        </div>
      </div>
    </>
  );
};

export default BuildingPage;
