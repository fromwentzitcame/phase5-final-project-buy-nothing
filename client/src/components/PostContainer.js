import React from 'react'
import Post from './Post'
import styled from 'styled-components'

function PostContainer({currentUser, posts, comments}) {

    function attachComments(postObj, commentsArr) {
        let postComments = commentsArr.filter(comment => comment.post_id === postObj.id)
        return postComments
    }


    let feed = posts ? posts.map( post => <Post key={post.id} postData={post} currentUser={currentUser} comments={attachComments(post, comments)} /> ) : null 

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
