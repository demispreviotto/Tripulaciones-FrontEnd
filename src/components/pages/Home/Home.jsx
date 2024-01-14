import React, { useEffect } from 'react'
import Buildings from '../../Buildings/Buildings'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getLoggedUser } from '../../../features/auth/authSlice';
import BuildingTodos from '../../Buildings/BuildingTodos';
import BuildingIncidences from '../../Buildings/BuildingIncidences';
import { getAllBuildings } from '../../../features/building/buildingSlice';
const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user)
    const buildings = useSelector((state) => state.building.buildings)

    useEffect(() => {
        dispatch(getAllBuildings())
        // if (!user) {
        //     navigate("/login")
        //         } else {
        // dispatch(getLoggedUser())
        // }
    }, [])

    if (!buildings) {
        return <div>Loading...</div>
    }

    return (
        <>
            {!user ? (
                navigate("/login")
                // null
            ) : (
                <>
                    <h2>Buenos dias,<br /> {user.firstName} {user.lastName} </h2 >
                    <p>{new Date().toLocaleString()}</p>
                    <div>
                        <h3>Fincas Por Revisar</h3>
                        <div>
                            <h4>Tareas</h4>
                            <BuildingTodos buildings={buildings} />
                        </div>
                        <div>
                            <h4>Incidencias</h4>
                            <BuildingIncidences buildings={buildings} />
                        </div>
                        {/* <Buildings /> */}
                    </div>
                </>
            )}
        </>
    )
}

export default Home