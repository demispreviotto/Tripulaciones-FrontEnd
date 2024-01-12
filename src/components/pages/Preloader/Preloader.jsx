import React, { useEffect } from 'react'

const Preloader = () => {
    useEffect(() => {
        console.log("loaded")
    })
    return (<>
        <h1>Preloader</h1>
        <p>Loading...</p>
    </>
    )
}

export default Preloader