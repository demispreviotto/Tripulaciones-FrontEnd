import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllBuildings } from "../../../features/building/buildingSlice";
import { fetchAndCreateIncidences } from "../../../features/incidence/incidenceSlice";
import Preloader from "../Preloader/Preloader";
import BuildingCheck from "../../Buildings/BuildingCheck";
import "./Home.scss"

const tokenLocal = JSON.parse(localStorage.getItem("token"));

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const token = useSelector((state) => state.auth.token);
    const buildings = useSelector((state) => state.building.buildings);
    const [formattedDate, setFormattedDate] = useState("");
    useEffect(() => {
        if (!user) {
            navigate("/inicio-sesion");
        } else {
            // dispatch(getAllBuildings());
            // dispatch(fetchAndCreateIncidences());
            const formattedDate = new Date().toLocaleDateString("es-ES", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
            });
            setFormattedDate(formattedDate);
        }
    }, []);
    useEffect(() => {
        if (token === tokenLocal) {
            dispatch(getAllBuildings());
        }
    }, [])

    if (!buildings || !user || !token) {
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
            <div className="building-check-container">
                <h3 className="building-check-header">Fincas por revisar hoy</h3>
                <div className="building-check">
                    <BuildingCheck buildings={buildings} />
                </div>
            </div>
        </div>
    );
};

export default Home;
