import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getBuildingById } from '../../../features/building/buildingSlice'

const BuildingPage = () => {
    const { _id } = useParams()
    const building = useSelector((state) => state.building)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBuildingById(_id))
    }, [])
    return (
        <>
            <h1>{_id}</h1>
            {/* <h1>{building.address}</h1> */}
            <div>
                <h2>Incidencias Conponent</h2>
                {/* {building} */}
            </div>
            <div>Recordatorios Component</div>
        </>
    )
}

export default BuildingPage