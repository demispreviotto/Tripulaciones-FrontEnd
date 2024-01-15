import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTodos } from '../../../features/todo/todoSlice'
import Preloader from '../Preloader/Preloader'

const Todos = () => {
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todo.todos)

    useEffect(() => {
        dispatch(getAllTodos())
    }, [])

    if (!todos) { return <Preloader /> }
    return (
        <>
            {console.log(todos)}
            <h3>Tareas</h3>
            <div>
                {todos.map((item) => (
                    <div key={item._id}>
                        <p>{item.title}</p>
                        <p>{!item.completed && 'Pendiente'}</p>
                        <p>{item.createdAt}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Todos