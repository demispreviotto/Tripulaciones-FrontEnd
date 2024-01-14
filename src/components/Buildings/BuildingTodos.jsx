import React from 'react'
import Preloader from '../pages/Preloader/Preloader';

const BuildingTodos = ({ buildings }) => {
    if (!buildings) {
        return <Preloader />;
    }
    const getPendingTodosCount = (todoIds) => {
        return todoIds.filter((todo) => !todo.completed).length;
    };

    return (
        <>
            {/* {console.log(buildings)} */}
            {buildings.map((building) => (
                <div key={building._id}>
                    <h5>{building.address} {building.number}</h5>
                    <p>Pending Todos: {getPendingTodosCount(building.todoIds)}</p>
                    <p>Total Todos: {building.todoIds.length}</p>
                </div>
            ))}
        </>

    )
}

export default BuildingTodos