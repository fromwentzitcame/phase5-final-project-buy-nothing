import React from 'react'
import styled from 'styled-components'
import Reply from './Reply'

function Comment({currentUser, commentData, commentData:{user, subcomments}}) {

    let displayReplies = subcomments.map( reply => <Reply key={reply.id} replyData={reply} currentUser={currentUser} /> )

    return (
        <CommentDiv>
            <UserInfo>
                <IconPic src={user.profile_picture_url}></IconPic>
                <span>{user.full_name}</span>
            </UserInfo>
            <p>{commentData.text}</p>
            <p>{commentData.likes} likes</p>
            <button>like</button>
            <button>reply</button>
            {commentData.user.id === currentUser.id ? <button>delete</button> : null }
            {displayReplies}
        </CommentDiv>
    )
}

export default Comment

const CommentDiv = styled.div`
    background: #99B399;
    border-radius: 5px;
    margin: 10px;
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