import React from 'react'
import { useNavigate } from 'react-router-dom'

import { PostButton } from "../styles"
import styled from 'styled-components'
import swal from 'sweetalert'

function Reply({replyData, currentUser, deleteReply}) {
    let navigate = useNavigate()

    function handleDelete(replyData) {
        swal({
            title: "caution",
            text: "once deleted, you will not be able to recover this reply.",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`/subcomments/${replyData.id}`, {
                        method: 'DELETE'
                    })
                    .then(data => {
                        console.log(data)
                    })
                    swal("you have successfully deleted your reply.")
                    deleteReply(replyData)
                    navigate('/')
                } else {
                    swal("you did not delete your reply.")
                }
            })

    }

    return (
        <ReplyDiv>
            <UserInfo>
                <IconPic src={replyData.user_picture}></IconPic>
                <span>{replyData.user_name}, {replyData.user_neighborhood}</span>
            </UserInfo>
            <p>{replyData.datetime_created}</p>
            <p>{replyData.text}</p>
            <p>{ replyData.likes > 0 ? `${replyData.likes} likes` : null }</p>
            <PostButton>like</PostButton>
            {replyData.user_id === currentUser.id ? <PostButton onClick={() => handleDelete(replyData)}>delete</PostButton> : null }
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