import React, { useState } from 'react'
import Comment from './Comment'
import CreateComment from './CreateComment'

import styled from 'styled-components'
import swal from 'sweetalert'

import { PostButton } from "../styles";
import { useNavigate } from 'react-router-dom'

function Post({currentUser, postData, allPosts, setPosts, comments, allComments, setComments, allReplies, setReplies, deletePost, deleteComment, deleteReply}) {
    let navigate = useNavigate()
    const [showCommentForm, setShowCommentForm] = useState(false)
    const [toggleLike, setToggleLike] = useState(false)

    let displayComments = comments ? comments.map(comment => <Comment
                                                                key={comment.id}
                                                                commentData={comment}
                                                                allComments={allComments}
                                                                setComments={setComments}
                                                                replies={attachReplies(comment, allReplies)}
                                                                allReplies={allReplies}
                                                                setReplies={setReplies}
                                                                currentUser={currentUser}
                                                                deleteComment={deleteComment}
                                                                deleteReply={deleteReply}/>) : null
    let displayPictures = postData && postData.picture_urls ? postData.picture_urls.map(picture => <img key={picture} src={picture} alt="broken image"></img>) : null

    function handleCommentFormDisplay() {
        setShowCommentForm(showCommentForm => !showCommentForm)
    }
    
    function handleToggleLike() {
        setToggleLike(toggleLike => !toggleLike)
    }

    function likeRender(updatedPost) {
        let updatedPosts = [...allPosts]
        updatedPosts.splice(allPosts.indexOf(postData), 1, updatedPost)
        setPosts(updatedPosts)
        navigate('/')
    }

    function attachReplies(commentObj, repliesArr) {
        let postReplies = repliesArr.filter(reply => reply.comment_id === commentObj.id)
        return postReplies
    }

    function handleDelete(postData) {
        swal({
            title: "caution",
            text: "once deleted, you will not be able to recover this post.",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`/posts/${postData.id}`, {
                        method: 'DELETE'
                    })
                    .then(data => console.log(data))
                    swal("you have successfully deleted this post.")
                    deletePost(postData)
                    navigate('/')
                } else {
                    swal("you did not delete this post.")
                }
            })
    }

    function likePost() {
        fetch(`/posts/${postData.id}/like`, {
            method: 'PATCH',
            heaers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                likes: postData.likes
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

    function unlikePost() {
        fetch(`/posts/${postData.id}/unlike`, {
            method: 'PATCH',
            heaers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                likes: postData.likes
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
        <PostCard>
            <h3>{postData.category_type}</h3>
            <UserInfo>
                <IconPic src={postData.user_picture}/>
                <p>{postData.user_name}, {postData.user_neighborhood}</p>
            </UserInfo>
            <p>Posted on {postData.datetime_created}</p>
            <p>{postData.text}</p>
            { postData.picture_urls ? 
                        <PicDiv>
                        {displayPictures}
                    </PicDiv> : null
            }
            <div>
                <p>{ postData.likes > 0 ? `${postData.likes} likes` : null }</p>
                { toggleLike === false? <PostButton onClick={() => likePost()}>like</PostButton> : <PostButton onClick={() => unlikePost()}>unlike</PostButton>}
                <PostButton onClick={() => handleCommentFormDisplay()}>comment</PostButton>
                {postData.user_id === currentUser.id ? <PostButton onClick={() => handleDelete(postData)}>delete</PostButton> : null }
                { showCommentForm === true ? <CreateComment currentUser={currentUser} setComments={setComments} allComments={allComments} postId={postData.id} handleClick={handleCommentFormDisplay}/> : null }
                <p> {comments.length > 0? 'comments' : null}</p>
                {displayComments}
            </div>
        </PostCard>
    )
}

export default Post

const PostCard = styled.div`
    background-color: #baccba;
    border-radius: 8px; 
    padding: 10px;
    margin: 10px;
    width: 500px;
    min-height: 200px;
`

const IconPic = styled.img`
    height: 40px;
    width: 40px;
    object-fit: cover;
    border-radius: 50px;
    margin-right: 15px;
    position: relative;
`

const PicDiv = styled.div`
    display: flex;
    overflow-x: auto;
    margin: 1rem 1rem;
    max-height: 225px;
    align-items: center;
    img {
        height: 200px;
        width: 200px;
        object-fit: cover;
        padding: 5px;
        border-radius: 5px;
    }
    ::-webkit-scrollbar {
        width: 0px;
        height: 10px;
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

const UserInfo = styled.div`
    display: flex;
    align-items: center;
    padding: 5px;
`