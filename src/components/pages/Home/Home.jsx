import React, { useEffect } from 'react'
import Buildings from '../../Buildings/Buildings'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getLoggedUser } from '../../../features/auth/authSlice';
const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user)

    useEffect(() => {
        if (!user) {
            navigate("/login")
            //     } else {
            //         dispatch(getLoggedUser())
        }
    }, [])
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
                        <Buildings />
                    </div>
                </>
            )}
        </>
    )
}

export default Home