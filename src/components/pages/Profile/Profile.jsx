import React from 'react'
import { useSelector } from 'react-redux';

const Profile = () => {
    const user = useSelector((state) => state.auth.user)
    const { firstName, lastName, email } = user;
    return (
        <>
            <h1>Profile</h1>
            <div>
                <h2>{firstName}</h2>
                <h3>{lastName}</h3>
                <p>{email}</p>
            </div>
        </>
    )
}

export default Profile