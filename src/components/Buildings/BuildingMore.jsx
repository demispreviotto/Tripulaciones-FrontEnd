import React from 'react'
import { useNavigate } from "react-router-dom";

import Logo_VerFincas from "../../assets/Logo_VerFincas";

const BuildingMore = () => {
    const navigate = useNavigate()
    const handleGoBuildings = () => {
        navigate("/fincas");
    };

    return (
        <div className="see-all-buildings" onClick={handleGoBuildings}>
            Ver todas las fincas <Logo_VerFincas />
        </div>

    )
}

export default BuildingMore