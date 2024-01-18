import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllBuildings } from "../../../features/building/buildingSlice";
import BuildingCreate from "../../pages/BuildingCreate/BuildingCreate";
import Loading from "../../common/Loading/Loading";
import Icon_GoBack from "../../../assets/Icon_GoBack";
import Icon_Search from "../../../assets/Icon_Search";
import Icon_Plus from "../../../assets/Icon_Plus";
import "./Buildings.scss";

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

  const handleClickPlusIcon = () => {
    setTimeout(() => {
      navigate("/fincas/crear");
    }, 0o500);
  };

  return (
    <>
      <header>
        <Icon_GoBack />
        <div className="header-div">
          <Icon_Search />
          <p onClick={handleClickPlusIcon}>
            <Icon_Plus />
          </p>
        </div>
      </header>
      <div className="buildings-title">
        <h1>Todas las fincas</h1>
        <h4>{buildings.length} fincas</h4>
      </div>
      <div className="all-building-container">
        {buildings &&
          buildings.map((building) => (
            <div
              className="cards-container"
              key={building._id}
              onClick={() => handleOnClick(building)}
            >
              <div className="buildings-card-container">
                <div className="card-buildings">
                  <h3>
                    {building.address} {building.number}
                  </h3>
                  <p>Tareas: {building?.todosIds?.length || 0}</p>
                  <p>Incidencias: {building?.incidenceIds?.length || 0}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
      {/* <BuildingCreate /> */}
    </>
  );
};

export default Buildings;
