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
        } else {
            dispatch(getLoggedUser())
        }
    }, [])
    return (
        <>
            {!user ? (
                null
            ) : (
                <>
                    <h2>Home</h2 >
                    <Buildings />
                </>
            )}
        </>
    )
}

export default Home