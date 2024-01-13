import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Buildings = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const buildings = useSelector((state) => state.auth.user.buildingIds)
    useEffect(() => {
        console.log(buildings)
        console.log('page loaded')
    }, [])
    const handleOnClick = (building) => {
        // console.log(building._id)
        navigate(`/buildings/${building._id}`)
    }
    return (
        <>
            <h2>Buildings</h2>
            <div>
                {buildings.map(building => (
                    <div key={building._id} onClick={() => handleOnClick(building)}>
                        <h3>{building.address} {building.number}</h3>
                        <p>{building._id}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Buildings