import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getBuildingById } from "../../../features/building/buildingSlice";
import Preloader from "../Preloader/Preloader";
import DoorCreate from "../DoorCreate/DoorCreate";
import OwnerCreate from "../OwnerCreate/OwnerCreate";

const BuildingPage = () => {
  const { _id } = useParams();
  const building = useSelector((state) => state.building.building);
  const status = useSelector((state) => state.building.status);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getBuildingById(_id));
  }, []);
  if (!building) {
    return <Preloader />;
  }

  const goCreateOwner = async () => {
    navigate(`/propietarios/crear?finca=${_id}`);
  };

  return (
    <>
      <h1>{`${building.address} ${building.number}`}</h1>
      <div>
        <p>Incidencias: {building.incidenceIds.length}</p>
        <p>Id: {_id}</p>
        <p>Código postal: {building.zipCode}</p>
        <p>Cuidad: {building.city}</p>
        <p>Comunidad: {building.province}</p>
      </div>
      <div>
        <h2>Componente Incidencias</h2>
        {building.incidenceIds.length < 1 ? (
          <p>Sin incidencias.</p>
        ) : (
          building.incidenceIds.map((incidence) => (
            <div key={incidence}>
              <h3>{incidence}</h3>
              <h3>{incidence}</h3>
            </div>
          ))
        )}
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
        <OwnerCreate buildingId={_id}/>
      </div>
    </>
  );
};

export default BuildingPage;
