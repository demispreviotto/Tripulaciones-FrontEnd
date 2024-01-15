import React, { useEffect } from "react";
import Preloader from "../Preloader/Preloader";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../../features/service/serviceSlice";

const Service = () => {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.service.services);

  useEffect(() => {
    dispatch(getAll());
  }, []);

  if (!services) {
    <Preloader />;
  }

  return (
    <>
      {services && services.length > 0 ? (
        services.map((service) => (
          <div key={service._id}>
            <h3>
              {service.company} {service.name}
            </h3>
          </div>
        ))
      ) : (
        <Preloader />
      )}
    </>
  );
};

export default Service;
