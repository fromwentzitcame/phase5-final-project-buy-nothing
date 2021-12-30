import React from 'react'
import styled from 'styled-components'

function Reply({replyData, currentUser}) {
    return (
        <ReplyDiv>
            <UserInfo>
                <IconPic src={replyData.user_picture}></IconPic>
                <span>{replyData.user_name}</span>
            </UserInfo>
            <p>{replyData.text}</p>
            <p>{replyData.likes} likes</p>
            <button>like</button>
            {replyData.user_id === currentUser.id ? <button>delete</button> : null }
        </ReplyDiv>
    )
}

export default Reply

const ReplyDiv = styled.div`
    background: #BACCBA;
    border-radius: 5px;
    padding: 10px;
`

const IconPic = styled.img`
    height: 40px;
    width: 40px;
    object-fit: cover;
    border-radius: 50px;
    margin-right: 15px;
    position: relative;
`

const UserInfo = styled.div`
    display: flex;
    align-items: center;
    padding: 5px;
`