import React from 'react'
import { useNavigate } from "react-router-dom";

import Icon_Arrow from "../../assets/Icon_Arrow";

const BuildingMore = () => {
    const navigate = useNavigate()
    const handleGoBuildings = () => {
        navigate("/fincas");
    };

    return (
        <div className="see-all-buildings" onClick={handleGoBuildings}>
            Ver todas las fincas <Icon_Arrow />
        </div>

    )
}

export default BuildingMore