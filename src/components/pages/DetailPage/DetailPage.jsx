import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBuildingById } from "../../../features/building/buildingSlice";
import OwnerCreate from "../OwnerCreate/OwnerCreate";
import DoorCreate from "../DoorCreate/DoorCreate";
import "./DetailPage.scss";
import Logo_GoBack from "../../../assets/Logo_GoBack";

const DetailPage = ({ buildingId }) => {
  const tokenLocal = JSON.parse(localStorage.getItem("token"));
  const token = useSelector((state) => state.auth.token);
  const { _id } = useParams();
  const building = useSelector((state) => state.building.building);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token === tokenLocal) {
      dispatch(getBuildingById(_id));
    }
  }, []);

  useEffect(() => {
    if (!building) {
      dispatch(getBuildingById(_id));
    }
  });

  return (
    <>
      <div className="building-header">
        <Logo_GoBack />
      </div>
      <div className="address-detail">
        <h1>{`${building.address} ${building.number}, ${building.zipCode}`}</h1>
        <h3>575 mensajes optimizados</h3>
      </div>
      <div>
        <h2>Puertas</h2>
        {building?.doorIds?.length === 0 ? (
          <p>Sin puertas.</p>
        ) : (
          building?.doorIds?.map((door) => (
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
        {building?.serviceIds?.length === 0 ? (
          <p>Sin servicios.</p>
        ) : (
          building?.serviceIds?.map((service) => (
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
        {building?.ownerIds?.length === 0 ? (
          <p>Sin propietarios.</p>
        ) : (
          building?.ownerIds?.map((owner) => (
            <div key={owner}>
              <p>
                propietario: {owner.firstName} {owner.lastName}
              </p>
            </div>
          ))
        )}
        <OwnerCreate buildingId={buildingId} />
      </div>
    </>
  );
};

export default DetailPage;
