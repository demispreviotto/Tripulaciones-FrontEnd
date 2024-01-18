import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getIncidenceById } from '../../../features/incidence/incidenceSlice'
import Loading from '../../common/Loading/Loading'
import Icon_GoBack from '../../../assets/Icon_GoBack'
// import { useDispatch } from 'react-redux'
// import { fetchAndCreateIncidences } from '../../../features/incidence/incidenceSlice'

const IncidencePage = () => {
    const { _id } = useParams()
    const dispatch = useDispatch()
    const incidence = useSelector((state) => state.incidence.incidence)

    useEffect(() => {
        dispatch(getIncidenceById(_id))
    }, [])

    if (!incidence) { return <Loading /> }
    // console.log(_id)
    return (
        <div>
            <header>
                <Icon_GoBack />
            </header>
            <p>IncidencePage</p>
            {console.log(incidence)}
            {/* <button onClick={() => dispatch(fetchAndCreateIncidences())}>fetch</button> */}
        </div>


    )
}

export default IncidencePage