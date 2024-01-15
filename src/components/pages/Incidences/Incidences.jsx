import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllIncidences } from "../../../features/incidence/incidenceSlice";
import IncidenceCreate from "../IncidenceCreate/IncidenceCreate";
import Loading from "../../common/Loading/Loading";

const Incidences = () => {
  const dispatch = useDispatch();
  const incidences = useSelector((state) => state.incidence.incidences);

  useEffect(() => {
    dispatch(getAllIncidences());
  }, []);

  if (!incidences[0]) {
    console.log(incidences);
    return <Loading />;
  }
  return (
    <>
      <div>Incidencias</div>
      {/* {console.log(incidences)} */}
      {incidences.map((item) => (
        <div key={item._id}>
          <p>{item.summary}</p>
          <p>{item.status}</p>
          <p>{item.category}</p>
        </div>
      ))}
      <IncidenceCreate />
    </>
  );
};

export default Incidences;
