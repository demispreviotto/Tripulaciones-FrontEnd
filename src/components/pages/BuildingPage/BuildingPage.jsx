import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getBuildingById } from '../../../features/building/buildingSlice'

const BuildingPage = () => {
    const { _id } = useParams()
    const building = useSelector((state) => state.building.building)
    const status = useSelector((state) => state.building.status)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBuildingById(_id))
    }, [])
    if (!building) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <h1>{`${building.address} ${building.number}`}</h1>
            <div>
                <p>incidences:{building.incidenceIds.length}</p>
                <p>id:{_id}</p>
                <p>zipCode:{building.zipCode}</p>
                <p>city:{building.city}</p>
                <p>province:{building.province}</p>
            </div>
            <div>
                <h2>Incidencias Conponent</h2>
                {building.incidenceIds.length < 1 ? (
                    <p>No incidences to show.</p>
                ) : (
                    building.incidenceIds.map((incidence) => (
                        <div key={incidence}>
                            <h3>{incidence}</h3>
                            <h3>{incidence}</h3>
                        </div>)
                    ))}
            </div>
            <div>
                <h2>Doors</h2>
                {building.doorIds.length === 0 ? (
                    <p>No doors to show.</p>
                ) : (
                    building.doorIds.map((door) => (
                        <div key={door}>
                            <p>{door}</p>
                        </div>))
                )}
            </div>
            <div>
                <h2>Services</h2>
                {building.serviceIds.length === 0 ? (
                    <p>No Services to show.</p>
                ) : (
                    building.serviceIds.map((service) => (
                        <div key={service}>
                            <h3>{service}</h3>
                        </div>
                    ))
                )}
            </div>
            <div>Recordatorios Component</div>
        </>
    )
}

export default BuildingPage