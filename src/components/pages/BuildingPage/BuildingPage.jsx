import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const BuildingPage = () => {
    const { _id } = useParams()
    // const building = useSelector((state) => state.building)
    useEffect(() => {
        // console.log(`getBuildingById(${_id})`)
    })
    return (
        <>
            {console.log(_id)}
            <h1>{_id}</h1>
            {/* <h1>{building.address}</h1> */}
            {/* <p>Address: {building.address}</p> */}
            <div>Incidencias Conponent</div>
            <div>Recordatorios Component</div>
        </>
    )
}

export default BuildingPage