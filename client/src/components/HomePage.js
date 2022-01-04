import React from 'react'
import PostContainer from './PostContainer'

import styled from 'styled-components'
// import '../Homepage.css'

function HomePage({user}) {

    return (
        <div id="homepage">
            <PostFeed>
                <h2>community posts</h2>
                <PostContainer currentUser={user}/>
            </PostFeed>
        </div>
    )
}

export default HomePage

const PostFeed = styled.div`
    padding-top: 70px;
    padding-left: 160px;
    padding-right: 30px;

`