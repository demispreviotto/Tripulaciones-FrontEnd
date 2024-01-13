import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Preloader.css"
import { useSelector } from 'react-redux'
import Logo from '../../../assets/Logo'
const Preloader = () => {
    const user = useSelector((state) => state.auth.user)
    const navigate = useNavigate()
    useEffect(() => {
        if (!user) {
            setTimeout(() => {
                navigate("/login")
            }, 3000);
        } else {
            setTimeout(() => {
                console.log("dispatch(getLoggedUser())")
                navigate("/home")
            }, 3000);
            // dispatch(getLoggedUser())
        }
    })
    return (
        <div className='preloader'>
            <div className="logo-container">
                <Logo fill={"#FFF"} />
                <h2>Cajon Digital</h2>

            </div>
            <p>Loading...</p>
        </div>
    )
}

export default Preloader