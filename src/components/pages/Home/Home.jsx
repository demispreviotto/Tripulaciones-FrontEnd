import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { getLoggedUser } from "../../../features/auth/authSlice";
import BuildingTodos from "../../Buildings/BuildingTodos";
import BuildingIncidences from "../../Buildings/BuildingIncidences";
import { getAllBuildings } from "../../../features/building/buildingSlice";
import Preloader from "../Preloader/Preloader";
import BuildingCheck from "../../Buildings/BuildingCheck";

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const buildings = useSelector((state) => state.building.buildings);

    useEffect(() => {
        if (!user) {
            navigate("/inicioSesion");
        } else {
            dispatch(getAllBuildings());
            // dispatch(getLoggedUser())
        }
    }, []);

    if (!buildings || !user) {
        return <Preloader />;
    }

    return (
        <div className="home">
            <div className="greetings">
                <h2>Buenos dias,<br /> {user.firstName} {user.lastName}
                </h2>
                <p>{new Date().toLocaleString()}</p>
            </div>
            <div>
                <h3 className="building-check-header">Fincas Por Revisar</h3>
                <div className="building-check">
                    {/* <BuildingTodos buildings={buildings} />
                    <BuildingIncidences buildings={buildings} /> */}
                    <BuildingCheck buildings={buildings} />
                </div>
            </div>
        </div>
    );
};

export default Home;
