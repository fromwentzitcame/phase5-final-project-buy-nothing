import React, { useState, useEffect } from 'react'
import PostContainer from './PostContainer'
import Toolbar from './Toolbar'

import styled from 'styled-components'
// import '../Homepage.css'

function HomePage({user}) {
    const [posts, setPosts] = useState([])

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
            })  ;
        }, []);


    return (
        <div id="homepage">
            <div className="toolbar">
                <Toolbar />
            </div>
            <PostFeed>
                <h2>Community Posts</h2>
                <PostContainer posts={posts}/>
            </PostFeed>
        </div>
    )
}

export default HomePage

const PostFeed = styled.div`
    padding-top: 70px;
    padding-left: 150px;
    padding-right: 30px;

`