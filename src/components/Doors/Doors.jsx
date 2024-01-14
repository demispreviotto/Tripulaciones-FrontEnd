import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAllDoors } from '../../features/Door/doorSlice'

const Doors = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const doors = useSelector((state) => state.door.doors)
    useEffect(() => {
        dispatch(getAllDoors())
    }, [])

    const handleOnClick = (door) => {
        // console.log(Door._id)
        navigate(`/doors/id/${door._id}`)
    }
    if (!doors) {
        return <div>Loading...</div>;
    }
    return (
        <>
            {/* <h2>Doors</h2> */}
            {/* <div> */}
            {doors && doors.map(door => (
                <div key={door._id} onClick={() => handleOnClick(door)}>
                    <h3>{door.address} {door.number}</h3>
                    <p>N of incidences: {door.incidenceIds.length}</p>
                </div>
            ))}
            {/* </div> */}
            {/* <DoorCreate /> */}
        </>
    )
}

export default Doors