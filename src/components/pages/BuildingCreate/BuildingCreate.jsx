import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createBuilding } from '../../../features/building/buildingSlice';

const BuildingCreate = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const message = useSelector((state) => state.building.message)
    const status = useSelector((state) => state.building.status)
    const initialValue = {
        address: '',
        number: '',
        zipCode: '',
        province: '',
        city: '',
    }
    const [data, setData] = useState(initialValue)
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [active, setActive] = useState(false)

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
        // handleActive()
        dispatch(createBuilding(data))
        // navigate("/buildings")
    }
    // useEffect(() => {
    //     if (status === "succeeded") {
    //         const timeoutId = setTimeout(() => {
    //             navigate("/buildings");
    //             setIsSubmitting(false);
    //             setData(initialValue);
    //         }, 3000);

    //         return () => clearTimeout(timeoutId);
    //     } else if (status === "failed") {
    //         setIsSubmitting(false);
    //     }
    // }, [status]);


    return (
        <>
            {!active ? (
                <button type='submit' onClick={handleActive}>Create</button>
            ) : (
                <div>
                    <h2>Buildings Create</h2>
                    <form onSubmit={handleOnSubmit}>
                        <input type="text" name='address' placeholder='Address' onChange={handleOnChange} />
                        <input type="number" name='number' placeholder='Number' onChange={handleOnChange} />
                        <input type="number" name='zipCode' placeholder='Zip Code' onChange={handleOnChange} />
                        <input type="text" name='province' placeholder='Province' onChange={handleOnChange} />
                        <input type="text" name='city' placeholder='City' onChange={handleOnChange} />
                        {message && <p className={status}>{message}</p>}
                        <button type='submit' disabled={isSubmitting}>Create</button>
                    </form>
                </div>
            )}
        </>
    )
}

export default BuildingCreate