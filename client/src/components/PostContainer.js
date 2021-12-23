import React from 'react'
import Post from './Post'
import styled from 'styled-components'

function PostContainer({posts}) {
    let feed = posts ? posts.map( post => <Post key={post.id} postData={post} /> ) : null 

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
`
