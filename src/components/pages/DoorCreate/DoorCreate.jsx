import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createDoor, getAllDoors } from "../../../features/door/doorSlice";
import { getOwners } from "../../../features/building/buildingSlice";
import { useParams } from "react-router-dom";
import "./DoorCreate.css";
import Loading from "../../common/Loading/Loading";

const DoorCreate = ({ building }) => {
  const { _id } = useParams();
  const buildingId = _id;
  const [formData, setFormData] = useState({
    buildingId: buildingId,
    ownerIds: [],
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleOwnerSelect = (e) => {
    const selectedOwnerId = e.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      ownerIds: [selectedOwnerId],
    }));
  };

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
        <input
          type="text"
          name="name"
          placeholder="Puerta"
          onChange={handleInputChange}
        />
        <select
          name="ownerId"
          id="ownerId"
          value={formData.ownerIds}
          onChange={handleOwnerSelect}
        >
          <option value="" selected disabled>
            Selecciona Propietario
          </option>
          {building?.ownerIds?.map((owner) => (
            <option key={owner._id} value={owner._id}>
              {owner.firstName} {owner.lastName}
            </option>
          ))}
        </select>
        <button type="submit">+</button>
      </form>
      {message && <p className={status}>{message}</p>}
    </div>
  );
};

export default DoorCreate;
