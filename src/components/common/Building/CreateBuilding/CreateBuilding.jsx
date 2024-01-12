import React from 'react'

const CreateBuilding = () => {
    return (
        <>
            <div>
                <h2>CreateBuilding</h2>
                <form onSubmit={handleOnSubmit}>
                    <input type="text" name="address" placeholder='Address' />
                    <input type="number" name="number" placeholder='N#' />
                    <input type="text" name="city" placeholder='City' />
                    <input type="number" name="zipCode" placeholder='Zip Code N#' />
                    <input type="text" name="province" placeholder='Province' />
                </form>
            </div>
        </>
    )
}

export default CreateBuilding