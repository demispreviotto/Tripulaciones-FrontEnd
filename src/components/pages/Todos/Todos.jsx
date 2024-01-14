import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Todos = () => {
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todo.todos)
    return (
        <>
            <h3>Todos</h3>
            <div>
                {/* {todos.map((item) => (
                    <div key={item._id}>
                        <p>{item.id}</p>
                    </div>
                ))} */}
            </div>
        </>
    )
}

export default Todos