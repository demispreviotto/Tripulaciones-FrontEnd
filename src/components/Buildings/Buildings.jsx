import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAllBuildings } from '../../features/building/buildingSlice'
import Preloader from '../pages/Preloader/Preloader'

const Buildings = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const buildings = useSelector((state) => state.building.buildings)
    useEffect(() => {
        dispatch(getAllBuildings())
    }, [])

    const handleOnClick = (building) => {
        // console.log(building._id)
        navigate(`/buildings/id/${building._id}`)
    }
    if (!buildings) {
        return <Preloader />;
    }
    return (
        <>
            {/* <h2>Buildings</h2> */}
            {/* <div> */}
            {buildings && buildings.map(building => (
                <div key={building._id} onClick={() => handleOnClick(building)}>
                    <h3>{building.address} {building.number}</h3>
                    <p>N of incidences: {building.incidenceIds.length}</p>
                </div>
            ))}
            {/* </div> */}
            {/* <BuildingCreate /> */}
        </>
    )
}

export default Buildings