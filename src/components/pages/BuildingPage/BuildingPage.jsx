import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getBuildingById } from "../../../features/building/buildingSlice";
import Preloader from "../Preloader/Preloader";
import DoorCreate from "../DoorCreate/DoorCreate";
import OwnerCreate from "../OwnerCreate/OwnerCreate";
import Logo_Predicciones from "../../../assets/Logo_Predicciones";
import Logo_Incidencias from "../../../assets/Logo_Incidencias";
import Logo_Tareas from "../../../assets/Logo_Tareas";
import Logo_Reuniones from "../../../assets/Logo_Reuniones";
import Logo_Documentos from "../../../assets/Logo_Documentos";
import Logo_Proveedores from "../../../assets/Logo_Proveedores";
import Micro from "../../../assets/Micro";
import "./BuildingPage.css";
import Loading from "../../common/Loading/Loading";

const tokenLocal = JSON.parse(localStorage.getItem("token"));
const BuildingPage = () => {
  const token = useSelector((state) => state.auth.token)
  const { _id } = useParams();
  const building = useSelector((state) => state.building.building);
  const status = useSelector((state) => state.building.status);
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
  return (
    <>
      <div className="address-building">
        <h1>{`${building.address} ${building.number}`}</h1>
        <h3>Incidencias: {building?.incidenceIds?.length || 0}</h3>
        <h5>{building.zipCode}</h5>
        <button className="button">Ver detalles</button>
      </div>
      <br />
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
          <input type="search" placeholder="Buscar" className="placeholder"/>
          <Micro />
        </div>
      </div>
      <div>
        <h2>Puertas</h2>
        {building.doorIds.length === 0 ? (
          <p>Sin puertas.</p>
        ) : (
          building.doorIds.map((door) => (
            <div key={door}>
              <p>{door}</p>
            </div>
          ))
        )}
        {/* <h3>Crear</h3> */}
        <DoorCreate building={building} />
      </div>
      <div>
        <h2>Servicios</h2>
        {building.serviceIds.length === 0 ? (
          <p>Sin servicios.</p>
        ) : (
          building.serviceIds.map((service) => (
            <div key={service}>
              <h3>{service}</h3>
            </div>
          ))
        )}
      </div>
      <div>
        <h2>Componente Recordatorios</h2>
      </div>
      <div>
        <h2>Propietarios</h2>
        {building.ownerIds.length === 0 ? (
          <p>Sin propietarios.</p>
        ) : (
          building.ownerIds.map((owner) => (
            <div key={owner}>
              <p>
                propietario: {owner.firstName} {owner.lastName}
              </p>
            </div>
          ))
        )}
        <OwnerCreate buildingId={_id} />
      </div>
    </>
  );
};

export default BuildingPage;
