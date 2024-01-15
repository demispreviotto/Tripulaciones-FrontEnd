import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { createManualIncidence } from "../../../features/incidence/incidenceSlice";
// import { getAllBuildings } from "../../../features/building/buildingSlice";
import data from "../../../assets/data/dataEs.json";
import { useNavigate, useParams } from "react-router-dom";
import "./DoorCreate.css"

const DoorCreate = () => {
  const buildingId = useParams();
  const [formData, setFormData] = useState({
    buildingId: buildingId,
    ownerId: "", // pasar id
    name: "",
  });

  const dispatch = useDispatch();
  const owners = useSelector((state) => state.owner.owners);
  const message = useSelector((state) => state.owner.message);

  useEffect(() => {
    // dispatch(getAll())
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    console.log(message);
    console.log(createIncidenceStatus);
    // dispatch(createManualIncidence(formData));
  };

  useEffect(() => {
    if (
      message === "Manual incidence created successfully"
      //   createIncidenceStatus === "succeeded"
    ) {
      setTimeout(() => {
        navigate("/incidencias");
      }, 2000);
    }
  }, [message]);

  return (
    <div>
      {/* <h2>Crear nueva incidencia</h2> */}
      <form className="door-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Puerta" />
        <select name="ownerId" id="ownerId">
          <option value="" selected disabled>Selecciona Propietario</option>
          {owners.map((owner) => (
            <option key={owner._id} value={owner._id}>
              {owner.firstName}
            </option>
          ))}
        </select>
        {message && <p className={createIncidenceStatus}>{message}</p>}
        <button type="submit">+</button>
      </form>
    </div>
  );
};

export default DoorCreate;
