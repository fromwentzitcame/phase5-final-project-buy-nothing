import React from 'react'
import UserCard from './UserCard'

import styled from 'styled-components'

function UsersContainer({currentUser, allUsers}) {

    let usersArr = allUsers ? [...allUsers] : null
    let displayUsers = allUsers ? usersArr.filter( user => user.id !== currentUser.id ).map( user => <UserCard key={user.id} userData={user} />) : `something is wrong :(`

    return (
        <NeighborsPage>
            <UserCardContainer>
                <h2>neighbors</h2>
                <UserCardScroll>
                    {displayUsers}
                </UserCardScroll>
            </UserCardContainer>
            <div>
                <h2>community map</h2>
                <MapImg src="images/gr-map.jpeg" alt="gr-map"></MapImg>
            </div>
        </NeighborsPage>

    )
}

export default UsersContainer

const NeighborsPage = styled.div`
    padding-top: 70px;
    margin-left: 160px;
    padding-right: 30px;
    display: flex;
    justify-content: space-around;
    wrap: nowrap;
    text-align: center;
`

const UserCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 325px;
    width: 45%;
    margin: 5px;
`
const UserCardScroll = styled.div`
    overflow-y: auto;
    max-height: calc(85vh - 1rem);
    ::-webkit-scrollbar {
        width: 5px;
        /* height: 10px; */
    }
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }
    ::-webkit-scrollbar-thumb {
        background: #999;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #777;
    }
`

const MapImg = styled.img`
    min-width: 250px;
    width: 75%;
    margin: 5px;
    border-radius: 8px;
`