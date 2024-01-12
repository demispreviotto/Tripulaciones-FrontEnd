import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Buildings = () => {
    const dispatch = useDispatch()
    const buildings = useSelector((state) => state.auth.user.buildingIds)
    useEffect(() => {
        console.log(buildings)
        console.log('page loaded')
    }, [])
    const handleOnClick = (e) => {
        console.log(e.target.value)
        // navigate(`/${e.target._id}`)
    }
    return (
        <>
            <h2>Buildings</h2>
            <div>
                {buildings.map((building) => {
                    <div key={building._id} onClick={handleOnClick}>
                        <h3>{building.name}</h3>
                        <p>{building.address} {building.name}</p>
                    </div>
                })}
            </div>
        </>
    )
}

export default Buildings