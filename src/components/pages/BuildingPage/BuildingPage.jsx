import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const BuildingPage = () => {
    const { buildingId } = useParams()
    const building = useSelector((state) => state.building)
    useEffect(() => {
        console.log(`getBuildingById(${buildingId})`)
    })
    return (
        <>
            {console.log(building)}
            {/* <h1>{building.name}</h1>
            <p>Address: {building.address}</p> */}
            <div>Incidencias Conponent</div>
            <div>Recordatorios Component</div>
        </>
    )
}

export default BuildingPage