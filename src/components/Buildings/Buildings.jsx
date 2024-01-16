import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllBuildings } from "../../features/building/buildingSlice";
import BuildingCreate from "../pages/BuildingCreate/BuildingCreate";
import Loading from "../common/Loading/Loading";

const Buildings = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const buildings = useSelector((state) => state.building.buildings);
  useEffect(() => {
    dispatch(getAllBuildings());
  }, []);

  const handleOnClick = (building) => {
    navigate(`/fincas/id/${building._id}`);
  };
  if (!buildings) {
    return <Loading />;
  }
  return (
    <>
      {buildings &&
        buildings.map((building) => (
          <div key={building._id} onClick={() => handleOnClick(building)}>
            <h3>
              {building.address} {building.number}
            </h3>
            <p>Número de Incidencias: {building.incidenceIds.length}</p>
          </div>
        ))}
      <BuildingCreate />
    </>
  );
};

export default Buildings;
