import React, { useEffect } from 'react'
import Buildings from '../../Buildings/Buildings'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
const Home = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.user)

    useEffect(() => {
        !user && navigate("/login")
    }, [])
    return (
        <>
            {!user ? (
                null
            ) : (
                <>
                    <h2>Home</h2 >
                    <button className="btn">Go</button>
                    <Buildings />
                </>
            )}
        </>
    )
}

export default Home