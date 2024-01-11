import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../../features/auth/authSlice'
import { Link } from 'react-router-dom'

const Register = () => {
    const initialValue = {
        email: '',
        firstName: '',
        lastName: '',
        password: '',
    }
    const [data, setData] = useState(initialValue)
    const dispatch = useDispatch()
    const [isSubmitting, setIsSubmitting] = useState(false)

    const message = useSelector((state) => state.auth.message)
    const status = useSelector((state) => state.auth.status)

    const handleOnChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    };

    const handleOnSubmit = (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        dispatch(register(data))
        status === 'succeeded' ? (
            setIsSubmitting(false),
            setData(initialValue)
        ) : (
            setTimeout(() => {
                setIsSubmitting(false)
            }, 3000)
        )
    }

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleOnSubmit}>
                <input type="text" name='email' placeholder='Email' onChange={handleOnChange} />
                <input type="text" name='firstName' placeholder='First Name' onChange={handleOnChange} />
                <input type="text" name='lastName' placeholder='Last Name' onChange={handleOnChange} />
                <input type="number" name='phone' placeholder='Phone Number' onChange={handleOnChange} />
                <input type="password" placeholder='Password' onChange={handleOnChange} />
                {message && <p className={status}>{message}</p>}
                <button type='submit' disabled={isSubmitting}>Sign Up</button>
            </form>
            <p>Already a user? <span><Link to='/login'>here</Link></span></p>
        </div>
    )
}

export default Register