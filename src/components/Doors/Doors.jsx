import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllDoors } from "../../features/Door/doorSlice";
import Loading from "../common/Loading/Loading";

const Doors = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const doors = useSelector((state) => state.door.doors);
  useEffect(() => {
    dispatch(getAllDoors());
  }, []);

  const handleOnClick = (door) => {
    navigate(`/puertas/id/${door._id}`);
  };
  if (!doors) {
    return <Loading />;
  }
  return (
    <>
      {doors &&
        doors.map((door) => (
          <div key={door._id} onClick={() => handleOnClick(door)}>
            <h3>
              {door.address} {door.number}
            </h3>
            <p>Número de incidencias: {door.incidenceIds.length}</p>
          </div>
        ))}
      {/* <DoorCreate /> */}
    </>
  );
};

export default Doors;
