import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { getLoggedUser } from "../../../features/auth/authSlice";
// import BuildingTodos from "../../Buildings/BuildingTodos";
// import BuildingIncidences from "../../Buildings/BuildingIncidences";
import { getAllBuildings } from "../../../features/building/buildingSlice";
import { fetchAndCreateIncidences } from "../../../features/incidence/incidenceSlice";
import Preloader from "../Preloader/Preloader";
import BuildingCheck from "../../Buildings/BuildingCheck";

// const token = localStorage.getItem("token")

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const token = useSelector((state) => state.auth.token);
    const buildings = useSelector((state) => state.building.buildings);
    const [formattedDate, setFormattedDate] = useState("");
    useEffect(() => {
        if (!token) {
            navigate("/inicio-sesion");
        } else {
            dispatch(getAllBuildings());
            dispatch(fetchAndCreateIncidences());
            const formattedDate = new Date().toLocaleDateString("es-ES", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
            });
            setFormattedDate(formattedDate);
        }
    }, []);

    if (!buildings || !user) {
        return <Preloader />;
    }

    return (
        <div className="home">
            <div className="greetings">
                <h2>
                    Buenos dias,
                    <br /> {user.firstName} {user.lastName}
                </h2>
                <p>{formattedDate}</p>
            </div>
            <div>
                <h3 className="building-check-header">Fincas Por Revisar</h3>
                <div className="building-check">
                    <BuildingCheck buildings={buildings} />
                </div>
            </div>
        </div>
    );
};

export default Home;
