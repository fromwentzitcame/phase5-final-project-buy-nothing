import React from 'react'
import styled from 'styled-components'

function UserCard({userData:{first_name, last_name, neighborhood_name, profile_picture_url}}) {
    return (
        <UserDiv>
            <IconPic src={profile_picture_url}/>
            <p>{`${first_name} ${last_name}, ${neighborhood_name}`}</p>
            <p></p>
        </UserDiv>
    )
}

export default UserCard

const UserDiv = styled.div`
    background-color: #baccba;
    border-radius: 8px; 
    padding: 10px;
    margin: 10px;
    min-width: 300px;
    max-width: 600px;
    min-height: 80px;
    display: flex;
    align-items: center;
    padding: 5px;
`

const IconPic = styled.img`
    height: 60px;
    width: 60px;
    object-fit: cover;
    border-radius: 50px;
    margin-right: 15px;
    position: relative;
`