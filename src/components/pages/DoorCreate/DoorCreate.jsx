import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDoors } from "../../../features/door/doorSlice";
import { getOwners } from "../../../features/building/buildingSlice";
import data from "../../../assets/data/dataEs.json";
import { useNavigate, useParams } from "react-router-dom";
import "./DoorCreate.css";
import Loading from "../../common/Loading/Loading";

const DoorCreate = ({ building }) => {
  const buildingId = useParams();
  const [formData, setFormData] = useState({
    buildingId: buildingId,
    ownerId: "", // pasar id
    name: "",
  });

  const dispatch = useDispatch();
  const owners = useSelector((state) => state.owner.owners);
  const message = useSelector((state) => state.door.message);
  const status = useSelector((state) => state.door.status);

  useEffect(() => {
    dispatch(getOwners(buildingId));
    dispatch(getAllDoors());
  }, [dispatch, buildingId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    console.log(message);
    dispatch(createDoor(formData));
  };

  if (!owners) {
    return <Loading />;
  }
  if (!building) {
    return <Loading />;
  }

  return (
    <div>
      <form className="door-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Puerta" />
        <select name="ownerId" id="ownerId">
          <option value="" selected disabled>
            Selecciona Propietario
          </option>
          {building.ownerIds.map((owner) => (
            <option key={owner._id} value={owner._id}>
              {owner.firstName} {owner.lastName}
            </option>
          ))}
        </select>
        {message && <p className={status}>{message}</p>}
        <button type="submit">+</button>
      </form>
    </div>
  );
};

export default DoorCreate;
