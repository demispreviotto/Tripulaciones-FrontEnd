import React from 'react'

const Login = () => {
    const handleOnSubmit = () => { }
    const handleOnChange = () => { }
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleOnSubmit}>
                <input type="text" name='email' placeholder='Email' onChange={handleOnChange} />
                <input type="password" placeholder='Password' onChange={handleOnChange} />
                <button className="btn" type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default Login