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
                    console.log(resp)
                    return resp.json()         
                } else {console.log("something went wrong")}
            })
            .then(data => {
                setPosts(data)
                console.log(data)
            });

            fetch('/comments')
            .then(resp => {
                if(resp.ok) {
                    console.log(resp)
                    return resp.json()         
                } else {console.log("something went wrong")}
            })
            .then(data => {
                setComments(data)
                console.log(data)
            });

            fetch('/subcomments')
            .then(resp => {
                if(resp.ok) {
                    console.log(resp)
                    return resp.json()         
                } else {console.log("something went wrong")}
            })
            .then(data => {
                setReplies(data)
                console.log(data)
            });

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
                                                    deleteComment={deleteComment}/> ) : null 

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
