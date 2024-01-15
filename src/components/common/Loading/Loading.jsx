import React from 'react'
import Logo from '../../../assets/Logo'

const Loading = () => {
    return (
        <div className="">
            <div className="logo-container">
                <Logo />
                <h2>FincUp</h2>
            </div>
            <p>Cargando...</p>
        </div>
    )
}

export default Loading