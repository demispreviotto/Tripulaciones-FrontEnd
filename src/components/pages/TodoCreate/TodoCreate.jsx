import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createTodo } from '../../../features/todo/todoSlice';
import { getAllBuildings } from '../../../features/building/buildingSlice';

const TodoCreate = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const buildings = useSelector((state) => state.building.buildings)
    const messageTodo = useSelector((state) => state.todo.message)
    const statusCreateTodo = useSelector((state) => state.todo.status)
    const initialValue = {
        title: '',
        description: '',
        // status: 'recived',
        complited: false,
        buildingId: ''
    }
    const [data, setData] = useState(initialValue)
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [active, setActive] = useState(false)

    useEffect(() => {
        dispatch(getAllBuildings())
    }, [])


    const handleOnChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleActive = (e) => {
        e.preventDefault();
        setActive(!active)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(data)
        // dispatch(createTodo(data))
    }
    // useEffect(() => {
    //     if (statusCreateTodo === "succeeded") {
    //         const timeoutId = setTimeout(() => {
    //             navigate("/todos");
    //             setIsSubmitting(false);
    //             setData(initialValue);
    //         }, 3000);

    //         return () => clearTimeout(timeoutId);
    //     } else if (statusCreateTodo === "failed") {
    //         setIsSubmitting(false);
    //     }
    // }, [statusCreateTodo]);

    if (!buildings) {
        return <>Loading...</>
    }

    return (
        <>
            {!active ? (
                <button type='submit' onClick={handleActive}>Create</button>
            ) : (
                <div>
                    <h2>To do Create</h2>
                    <form onSubmit={handleOnSubmit}>
                        <input type="text" name='title' placeholder='Title' onChange={handleOnChange} />
                        <textarea name="description" id="description" cols="30" rows="10" maxLength={255} placeholder='Todo description...' onChange={handleOnChange}></textarea>
                        <label htmlFor="status">Status</label>
                        <input type="checkbox" name="completed" id="completed" onChange={handleOnChange} />
                        {/* <select name="status" id="status" onChange={handleOnChange}>
                            <option value="recived">Recived</option>
                            <option value="processing">processing</option>
                            <option value="contacted">contacted</option>
                            <option value="awaiting">awaiting</option>
                            <option value="done">done</option>
                            <option value="complited">complited</option>
                        </select> */}
                        <select name="buildingId" id="buildingId" onChange={handleOnChange}>
                            {buildings.map((building) => (
                                <option key={building._id} value={building._id}>
                                    {building.address}
                                </option>
                            ))
                            }
                        </select>
                        {messageTodo && <p className={statusCreateTodo}>{messageTodo}</p>}
                        <button type='submit' disabled={isSubmitting}>Create</button>
                    </form>
                </div>
            )}
        </>
    )
}

export default TodoCreate