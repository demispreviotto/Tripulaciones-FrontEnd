import React from 'react'

const BuildingsCreate = () => {
    return (
        <div>
            <h2>Buildings Create</h2>
            <form onSubmit={handleOnSubmit}>
                <input type="text" name='address' placeholder='Address' onChange={handleOnChange} />
                <input type="number" name='number' placeholder='Number' onChange={handleOnChange} />
                <input type="number" name='zipCode' placeholder='Zip Code' onChange={handleOnChange} />
                <input type="text" name='city' placeholder='City' onChange={handleOnChange} />
                {message && <p className={status}>{message}</p>}
                <button type='submit' disabled={isSubmitting}>Login</button>
                <p>Not a user yet? <span><Link to='/register'>Here</Link></span></p>
            </form>
        </div>
    )
}

export default BuildingsCreate