import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllIncidences } from "../../../features/incidence/incidenceSlice";
import IncidenceCreate from "../IncidenceCreate/IncidenceCreate";
import { useParams } from "react-router-dom";
import { getBuildingById } from "../../../features/building/buildingSlice";
import Logo_GoBack from "../../../assets/Logo_GoBack";
import "./Incidences.scss";

const Incidences = () => {
  const dispatch = useDispatch();
  const building = useSelector((state) => state.building.building);
  const { _id } = useParams();

  useEffect(() => {
    dispatch(getBuildingById(_id));
    dispatch(getAllIncidences(_id));
  }, [_id]);

  return (
    <>
      <header>
        <Logo_GoBack />
      </header>
      <div className="title-incidence-container">
        <div className="incidences">
          <h1>
            Incidencias en {building.address}, {building.number}
          </h1>
        </div>
        <div className="messages">
          <h4>575 mensajes optimizados</h4>
        </div>
      </div>
      <div className="incidences-div">
        {building?.incidenceIds?.length === 0 ? (
          <div>
            <p>No hay incidencias en esta finca</p>
          </div>
        ) : (
          <>
            {/* <div>Incidencias</div> */}
            {/* {building.incidenceIds.map((item) => (
            <div key={item._id}>
              <p>{item}</p>
            </div>
          ))} */}
            {/* <IncidenceCreate /> */}
          </>
        )}
        <div className="incidence-card">
          <div className="title-date">
            <h1>titulo incidencia</h1>
            <h3>fecha</h3>
          </div>
          <h4>categoria</h4>
        </div>
      </div>
    </>
  );
};

export default Incidences;
