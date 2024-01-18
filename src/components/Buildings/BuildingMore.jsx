import React from 'react'
import { useNavigate } from "react-router-dom";

import Icon_Arrow from "../../assets/Icon_Arrow";

const BuildingMore = ({url}) => {
    const navigate = useNavigate()
    const handleGoBuildings = () => {
        navigate({url});
    };

    return (
        <div className="see-all-buildings" onClick={handleGoBuildings}>
            Ver todas las fincas <Icon_Arrow />
        </div>

    )
}

export default BuildingMore