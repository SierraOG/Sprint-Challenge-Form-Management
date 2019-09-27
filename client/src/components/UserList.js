import React from 'react'

import UserCard from './UserCard'

const UserList = (props) => {
    return (
        <>
        {props.userArray.map(userItem => <UserCard userItem={userItem}/> )}
        </>
    )
}

export default UserList