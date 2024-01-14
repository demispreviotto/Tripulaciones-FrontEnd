import React from 'react'
// import { useDispatch } from 'react-redux'

const BuildingIncidences = ({ buildings }) => {
    // const dispatch = useDispatch()


    if (!buildings) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {console.log(buildings)}
            {buildings.map((building) => (
                <div key={building._id}>
                    <h5>{building.address} {building.number}</h5>
                    <p>{building.incidenceIds.length}</p>
                </div>
            ))}
        </>

    )
}

export default BuildingIncidences