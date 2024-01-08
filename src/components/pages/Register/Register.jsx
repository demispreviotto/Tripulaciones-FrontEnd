import React from 'react'

const Register = () => {
    const handleOnSubmit = () => { }
    const handleOnChange = () => { }
    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleOnSubmit}>
                <input type="text" name='email' placeholder='Email' onChange={handleOnChange} />
                <input type="text" name='firstName' placeholder='First Name' onChange={handleOnChange} />
                <input type="text" name='lastName' placeholder='Last Name' onChange={handleOnChange} />
                <input type="password" placeholder='Password' onChange={handleOnChange} />
                <button className="btn" type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default Register