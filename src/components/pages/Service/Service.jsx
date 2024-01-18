import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../../features/service/serviceSlice";
import Loading from "../../common/Loading/Loading";

const Service = () => {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.service.services);

  useEffect(() => {
    dispatch(getAll());
  }, []);

  if (!services) {
    <Loading />;
  }

  return (
    <>
      <h2>Servicios disponibles:</h2>
      <br />
      {services ? (
        services.map((service) => (
          <div key={service._id}>
            <h3>Compañía: {service.company}</h3>
            <h4>Tema: {service.theme}</h4>
            <h5>Email: {service.contactEmail}</h5>
            <h5>Tel: {service.contactNumber}</h5>
            <h5>Valoración: {service.rate}</h5>
            <hr />
          </div>
        ))
      ) : (
        <p>No hay servicios disponibles.</p>
      )}
    </>
  );
};

export default Service;
