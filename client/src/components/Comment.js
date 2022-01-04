import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Reply from './Reply'
import CreateReply from './CreateReply'

import { PostButton } from "../styles"
import styled from 'styled-components'
import swal from 'sweetalert'

function Comment({currentUser, deleteComment, commentData, commentData:{user}, allComments, setComments, replies, setReplies, allReplies, deleteReply}) {
    let navigate = useNavigate()
    const [showReplyForm, setShowReplyForm] = useState(false)
    const [toggleLike, setToggleLike] = useState(false)

    let displayReplies = replies? replies.map( reply => <Reply key={reply.id} replyData={reply} currentUser={currentUser} setReplies={setReplies} allReplies={allReplies} deleteReply={deleteReply} /> ) : null

    function handleReplyFormDisplay() {
        setShowReplyForm(showReplyForm => !showReplyForm)
    }

    function handleToggleLike() {
        setToggleLike(toggleLike => !toggleLike)
    }

    function likeRender(updatedComment) {
        let updatedComments = [...allComments]
        updatedComments.splice(allComments.indexOf(commentData), 1, updatedComment)
        setComments(updatedComments)
        navigate('/')
    }

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

    function likeComment() {
        fetch(`/comments/${commentData.id}/like`, {
            method: 'PATCH',
            heaers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                likes: commentData.likes
            })
        })
            .then(resp => {
                if (resp.ok) {
                    resp.json() 
                    .then(data => {
                        console.log(data)
                        handleToggleLike()
                        likeRender(data)
                    })
                } else {
                    resp.json()
                    .then(error => console.log(error))
                }
            })
    }

    function unlikeComment() {
        fetch(`/comments/${commentData.id}/unlike`, {
            method: 'PATCH',
            heaers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                likes: commentData.likes
            })
        })
        .then(resp => {
            if (resp.ok) {
                resp.json() 
                .then(data => {
                    console.log(data)
                    handleToggleLike()
                    likeRender(data)
                })
            } else {console.log("something went wrong")}
            })
    }

    return (
        <CommentDiv>
            <UserInfo>
                <IconPic src={user.profile_picture_url}></IconPic>
                <span>{user.full_name}, {user.neighborhood_name}</span>
            </UserInfo>
            <p>{commentData.datetime_created}</p>
            <p>{commentData.text}</p>
            <p>{ commentData.likes > 0 ? `${commentData.likes} likes` : null }</p>
            { toggleLike === false? <PostButton onClick={() => likeComment()}>like</PostButton> : <PostButton onClick={() => unlikeComment()}>unlike</PostButton>}
            <PostButton onClick={() => handleReplyFormDisplay()}>reply</PostButton>
            {commentData.user.id === currentUser.id ? <PostButton onClick={() => handleDelete(commentData)}>delete</PostButton> : null }
            {displayReplies}
            { showReplyForm === true? <CreateReply currentUser={currentUser} commentId={commentData.id} allReplies={replies} setReplies={setReplies} handleClick={handleReplyFormDisplay}/> : null }
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