import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllIncidences } from '../../../features/incidence/IncidenceSlice';
import Preloader from '../Preloader/Preloader';

const Incidences = () => {
    const dispatch = useDispatch();
    const incidences = useSelector((state) => state.incidence.incidences)

    useEffect(() => {
        dispatch(getAllIncidences())
    }, [])

    if (!incidences[0]) {
        console.log(incidences)
        return <Preloader />
    }
    return (
        <>
            <div>Incidences</div>
            {/* {console.log(incidences)} */}
            {incidences.map((item) => (
                <div key={item._id}>
                    <p>{item._id}</p>
                </div>
            ))}
        </>
    )
}

export default Incidences