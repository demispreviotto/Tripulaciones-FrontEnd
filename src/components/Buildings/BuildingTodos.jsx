import React from 'react'

const BuildingTodos = ({ buildings }) => {
    if (!buildings) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {console.log(buildings)}
            {buildings.map((building) => (
                <div key={building._id}>
                    <h5>{building.address} {building.number}</h5>
                    {/* <p>{building.todoIds.length}</p> */}
                </div>
            ))}
        </>

    )
}

export default BuildingTodos