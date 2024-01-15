import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedUser } from "../../../features/auth/authSlice";
import BuildingTodos from "../../Buildings/BuildingTodos";
import BuildingIncidences from "../../Buildings/BuildingIncidences";
import { getAllBuildings } from "../../../features/building/buildingSlice";
import Preloader from "../Preloader/Preloader";

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

    if (!buildings) {
        return <Preloader />;
    }
    if (!user) {
        return <Preloader />;
    }

    // Calculate total non-completed incidences
    const totalNonCompletedIncidences = buildings.reduce((acc, building) => {
        const nonCompletedIncidences = building.incidenceIds.filter(
            (incidence) => incidence.status !== "Completada"
        );
        return acc + nonCompletedIncidences.length;
    }, 0);
    const totalNonCompletedTodos = buildings.reduce((acc, building) => {
        const nonCompletedTodos = building.todoIds.filter(
            (todo) => todo.status !== "Completada"
        );
        return acc + nonCompletedTodos.length;
    }, 0);

    return (
        <>
            <h2>
                Buenos dias,
                <br /> {user.firstName} {user.lastName}
            </h2>
            <p>{new Date().toLocaleString()}</p>
            <div>
                <h3>Fincas Por Revisar</h3>
                <div>
                    <h4>Tareas</h4><p>{totalNonCompletedTodos}</p>
                    <BuildingTodos buildings={buildings} />
                </div>
                <div>
                    <h4>Incidencias</h4><p>{totalNonCompletedIncidences}</p>
                    <BuildingIncidences buildings={buildings} />
                </div>
            </div>
        </>
    );
};

export default Home;
