import React from 'react'
import { useNavigate } from 'react-router-dom'

import Reply from './Reply'

import { PostButton } from "../styles";
import styled from 'styled-components'
import swal from 'sweetalert';

function Comment({currentUser, deleteComment, commentData, commentData:{user, subcomments}}) {
    let navigate = useNavigate()

    let displayReplies = subcomments.map( reply => <Reply key={reply.id} replyData={reply} currentUser={currentUser} /> )

    function handleDelete(commentData) {
        swal({
            title: "caution",
            text: "once deleted, you will not be able to recover this comment.",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`/comments/${commentData.id}`, {
                        method: 'DELETE'
                    })
                    .then(data => {
                        console.log(data)
                    })
                    swal("you have successfully deleted your comment.")
                    deleteComment(commentData)
                    navigate('/')
                } else {
                    swal("you did not delete your comment.")
                }
            })

    }

    return (
        <CommentDiv>
            <UserInfo>
                <IconPic src={user.profile_picture_url}></IconPic>
                <span>{user.full_name}</span>
            </UserInfo>
            <p>{commentData.text}</p>
            <p>{commentData.likes} likes</p>
            <PostButton>like</PostButton>
            <PostButton>reply</PostButton>
            {commentData.user.id === currentUser.id ? <PostButton onClick={() => handleDelete(commentData)}>delete</PostButton> : null }
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