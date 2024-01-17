import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchAndCreateIncidences } from '../../../features/incidence/incidenceSlice'

const IncidencePage = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <p>IncidencePage</p>
            <button onClick={() => dispatch(fetchAndCreateIncidences())}>fetch</button>
        </div>


    )
}

export default IncidencePage