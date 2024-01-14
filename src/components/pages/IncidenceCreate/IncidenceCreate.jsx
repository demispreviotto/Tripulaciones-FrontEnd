import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createManualIncidence } from '../../../features/incidence/incidenceSlice';
import { getAllBuildings } from '../../../features/building/buildingSlice';
import data from '../../../assets/data.json';
import { useNavigate } from 'react-router-dom';

const IncidenceCreate = () => {
    const incidenceCategories = data.incidenceCategories;
    const incidenceStatus = data.incidenceStatus;
    const [formData, setFormData] = useState({
        summary: '',
        category: incidenceCategories[0],
        originalMessage: '',
        status: incidenceStatus[0],
        doorId: '',
        buildingId: '',
        ownerId: '',
    });


    const navigate = useNavigate();
    const dispatch = useDispatch();
    const buildings = useSelector((state) => state.building.buildings)
    const message = useSelector((state) => state.incidence.message)
    const createIncidenceStatus = useSelector((state) => state.incidence.status)
    // const doors = useSelector((state) => state.door.doors)
    // const owners = useSelector((state) => state.owner.owners)

    useEffect(() => {
        dispatch(getAllBuildings())
        // dispatch(getAllDoors())
        // dispatch(getAllOwners())
    }, [])
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
        if (message === "Manual incidence created successfully" || createIncidenceStatus === "succeeded") {
            setTimeout(() => {
                navigate("/incidences")

            }, 2000);
        }
    }, [message])

    return (
        <div>
            <h2>Create New Incidence</h2>
            <form onSubmit={handleSubmit}>
                <textarea name="summary" value={formData.summary} cols="30" rows="10" maxLength={255} placeholder="Summary..." onChange={handleOnChange} />
                <select name="category" id="category" onChange={handleOnChange}>
                    <option value="" disabled selected>Select Category</option>
                    {incidenceCategories.map((item) => (
                        <option key={item} value={item}>{item}</option>
                    ))}
                </select>
                <textarea name="originalMessage" value={formData.originalMessage} cols="30" rows="10" maxLength={2000} placeholder="Description..." onChange={handleOnChange} />
                <select name="status" id="status" onChange={handleOnChange}>
                    <option value="" disabled selected>Select Status</option>
                    {incidenceStatus.map((item) => (
                        <option key={item} value={item}>{item}</option>
                    ))}
                </select>
                <select name="buildingId" id="buildingId" onChange={handleOnChange}>
                    <option value="" disabled selected>Select Building</option>
                    {buildings.map((item) => (
                        <option key={item._id} value={item._id}>
                            {item.address} {item.number}
                        </option>
                    ))
                    }
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
                {message && <p className={createIncidenceStatus}>{message}</p>}
                <button type="submit">Create Incidence</button>
            </form>
        </div>
    );
};

export default IncidenceCreate;
