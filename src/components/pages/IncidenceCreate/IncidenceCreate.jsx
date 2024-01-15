import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createManualIncidence } from "../../../features/incidence/incidenceSlice";
import { getAllBuildings } from "../../../features/building/buildingSlice";
import data from "../../../assets/dataEs.json";
import { useNavigate } from "react-router-dom";

const IncidenceCreate = () => {
  const incidenceCategories = data.incidenceCategories;
  const incidenceStatus = data.incidenceStatus;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [active, setActive] = useState(false);

  const [formData, setFormData] = useState({
    summary: "",
    category: incidenceCategories[0],
    originalMessage: "",
    status: incidenceStatus[0],
    doorId: "",
    buildingId: "",
    ownerId: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const buildings = useSelector((state) => state.building.buildings);
  const message = useSelector((state) => state.incidence.message);
  const createIncidenceStatus = useSelector((state) => state.incidence.status);
  // const doors = useSelector((state) => state.door.doors)
  // const owners = useSelector((state) => state.owner.owners)

  useEffect(() => {
    dispatch(getAllBuildings());
    // dispatch(getAllDoors())
    // dispatch(getAllOwners())
  }, []);
  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    console.log(message);
    console.log(createIncidenceStatus);

    dispatch(createManualIncidence(formData));
  };

  useEffect(() => {
    if (
      message === "Manual incidence created successfully" ||
      createIncidenceStatus === "succeeded"
    ) {
      setTimeout(() => {
        navigate("/incidencias");
      }, 2000);
    }
  }, [message]);

  const handleActive = (e) => {
    e.preventDefault();
    setActive(!active);
  };

  return (
    <>
      {!active ? (
        <button type="submit" onClick={handleActive}>
          Crear
        </button>
      ) : (
        <div>
          <h2>Crear nueva incidencia</h2>
          <form onSubmit={handleSubmit}>
            <textarea
              name="summary"
              value={formData.summary}
              cols="30"
              rows="10"
              maxLength={255}
              placeholder="Resúmen..."
              onChange={handleOnChange}
            />
            <select name="category" id="category" onChange={handleOnChange}>
              <option value="" disabled selected>
                Seleccionar Categoría
              </option>
              {incidenceCategories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <textarea
              name="originalMessage"
              value={formData.originalMessage}
              cols="30"
              rows="10"
              maxLength={2000}
              placeholder="Descripción..."
              onChange={handleOnChange}
            />
            <select name="status" id="status" onChange={handleOnChange}>
              <option value="" disabled selected>
                Seleccionar Estado
              </option>
              {incidenceStatus.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <select name="buildingId" id="buildingId" onChange={handleOnChange}>
              <option value="" disabled selected>
                Seleccionar Finca
              </option>
              {buildings.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.address} {item.number}
                </option>
              ))}
            </select>
            {/* <select name="doorId" id="doorId" onChange={handleOnChange}>
                    {doors.map((door) => (
                      <option key={door._id} value={door._id}>
                      {door.address}
                      </option>
                      ))
                    }
                    </select>
                    <select name="ownerId" id="ownerId" onChange={handleOnChange}>
                    {owners.map((owner) => (
                      <option key={owner._id} value={owner._id}>
                      {owner.address}
                      </option>
                      ))
                    }
                  </select> */}
            <button type="submit" disabled={isSubmitting}>Crear Incidencia</button>
            {message && <p className={createIncidenceStatus}>{message}</p>}
          </form>
        </div>
      )}
    </>
  );
};

export default IncidenceCreate;
