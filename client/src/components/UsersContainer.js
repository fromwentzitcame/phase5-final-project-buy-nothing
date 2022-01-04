import React from 'react'
import UserCard from './UserCard'

import styled from 'styled-components'

function UsersContainer({currentUser, allUsers}) {

    let usersArr = allUsers ? [...allUsers] : null
    let displayUsers = allUsers ? usersArr.filter( user => user.id !== currentUser.id ).map( user => <UserCard key={user.id} userData={user} />) : null

    return (
        <UserCardContainer>
            <h2>neighbors</h2>
            {displayUsers}
        </UserCardContainer>
    )
}

export default UsersContainer

const UserCardContainer = styled.div`
    padding-top: 70px;
    padding-left: 160px;
    padding-right: 30px;
`
