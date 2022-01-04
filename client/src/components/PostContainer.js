import React, { useState, useEffect } from 'react'
import Post from './Post'
import styled from 'styled-components'

function PostContainer({currentUser}) {
    const [posts, setPosts] = useState([])
    const [comments, setComments] = useState([])
    const [replies, setReplies] = useState([])

    useEffect(() => {
        fetch('/posts')
            .then(resp => {
                if(resp.ok) {
                    resp.json()         
                    .then(data => {
                        console.log(data)
                        setPosts(data)
                    })
                } else {console.log("something went wrong")}
            })
            ;

            fetch('/comments')
            .then(resp => {
                if(resp.ok) {
                    resp.json()
                    .then(data => setComments(data))         
                } else {console.log("something went wrong")}
            })
            ;

            fetch('/subcomments')
            .then(resp => {
                if(resp.ok) {
                    resp.json()
                    .then(data => setReplies(data))         
                } else {console.log("something went wrong")}
            })
            ;

        }, []);


    function attachComments(postObj, commentsArr) {
        let postComments = commentsArr.filter(comment => comment.post_id === postObj.id)
        return postComments
    }

    function deletePost(clickedPost) {
        let displayedPosts = posts? [...posts] : null
        const updatedPosts = displayedPosts.filter(post => post.id !== clickedPost.id)
        setPosts(updatedPosts)
    }

    function deleteComment(clickedComment) {
        let displayedComments = comments ? [...comments] : null
        const updatedComments = displayedComments.filter(comment => comment.id !== clickedComment.id)
        setComments(updatedComments)
    }

    function deleteReply(clickedReply) {
        let displayedReplies = replies ? [...replies] : null
        const updatedReplies = displayedReplies.filter(reply => reply.id !== clickedReply.id)
        setReplies(updatedReplies)
    }

    let revPosts = posts? [...posts] : null
    let feed = posts ? revPosts.reverse().map( post => <Post
                                                    key={post.id}
                                                    postData={post}
                                                    currentUser={currentUser}
                                                    comments={attachComments(post, comments)}
                                                    allComments={comments}
                                                    setComments={setComments}
                                                    allReplies={replies}
                                                    setReplies={setReplies}
                                                    deletePost={deletePost}
                                                    deleteComment={deleteComment}
                                                    deleteReply={deleteReply}/> ) : null 

    return (
        <>
            <PostFeedContainer>
                {feed}
            </PostFeedContainer>
        </>

    )
}

export default PostContainer

const PostFeedContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`
