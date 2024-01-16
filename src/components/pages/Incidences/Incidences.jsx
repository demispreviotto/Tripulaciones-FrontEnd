import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllIncidences } from "../../../features/incidence/incidenceSlice";
import IncidenceCreate from "../IncidenceCreate/IncidenceCreate";
import { useParams } from "react-router-dom";

const Incidences = () => {
  const dispatch = useDispatch();
  const incidences = useSelector((state) => state.incidence.incidences);
  const { _id } = useParams();

  useEffect(() => {
    dispatch(getAllIncidences(_id));
  }, [_id]);

  useEffect(() => {
    console.log("Incidences:", incidences);
  }, [incidences]);

  return (
    <>
      {incidences.length === 0 ? (
        <div>
          <p>No hay incidencias en esta finca</p>
        </div>
      ) : (
        <>
          <div>Incidencias</div>
          {incidences.map((item) => (
            <div key={item._id}>
              <p>{item.summary}</p>
              <p>{item.status}</p>
              <p>{item.category}</p>
            </div>
          ))}
          <IncidenceCreate />
        </>
      )}
    </>
  );
};

export default Incidences;
