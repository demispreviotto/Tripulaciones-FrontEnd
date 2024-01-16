import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
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
      <h1>{`${building.address} ${building.number}`}</h1>
      <div>
        <h3>Incidencias: {building?.incidenceIds?.length || 0}</h3>
        <h5>{building.zipCode}</h5>
      </div>
      <br />
      <div className="cards">
        <div>
          <Logo_Predicciones />
          <h3>predicciones</h3>
        </div>
        <div>
          <Logo_Incidencias />
          <h3>Componente Incidencias</h3>
          {building.incidenceIds.length < 1 ? (
            <p>Sin incidencias.</p>
          ) : (
            building.incidenceIds.map((incidence) => (
              <div key={incidence}>
                {/* <h3>{incidence}</h3> */}
                {/* <h3>{incidence}</h3> */}
              </div>
            ))
          )}
        </div>
        <div>
          <Logo_Tareas />
          <h3>tareas</h3>
        </div>
        <div>
          <Logo_Reuniones />
          <h3>reuniones</h3>
        </div>
        <div>
          <Logo_Documentos />
          <h3>documentos</h3>
        </div>
        <div>
          <Logo_Proveedores />
          <h3>proveedores</h3>
        </div>
        <div>
          <input type="search" placeholder="Buscar" />
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
