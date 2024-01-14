import React from 'react'
import Preloader from '../pages/Preloader/Preloader'
// import { useDispatch } from 'react-redux'

const BuildingIncidences = ({ buildings }) => {
    // const dispatch = useDispatch()


    if (!buildings) {
        return <Preloader />;
    }
    const getPendingIncidenceCount = (incidenceIds) => {
        return incidenceIds.filter((incidence) => incidence.status !== "Completed").length;
    };

    return (
        <>
            {console.log(buildings)}
            {buildings.map((building) => (
                <div key={building._id}>
                    <h5>{building.address} {building.number}</h5>
                    <p>Pending Incidences:{getPendingIncidenceCount(building.incidenceIds)}</p>
                    <p>Total Incidences:{building.incidenceIds.length}</p>
                </div>
            ))}
        </>

    )
}

export default BuildingIncidences