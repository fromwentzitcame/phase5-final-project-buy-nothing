import React, { useState, useEffect } from 'react'
import PostContainer from './PostContainer'
import Toolbar from './Toolbar'

import styled from 'styled-components'
// import '../Homepage.css'

function HomePage({user}) {
    const [posts, setPosts] = useState([])
    const [comments, setComments] = useState([])
    const [users, setUsers] = useState([])

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

            fetch('/users')
            .then(resp => {
                if(resp.ok) {
                    console.log(resp)
                    return resp.json()         
                } else {console.log("something went wrong")}
            })
            .then(data => {
                setUsers(data)
                console.log(data)
            })
        }, []);


    return (
        <div id="homepage">
            <div className="toolbar">
                <Toolbar />
            </div>
            <PostFeed>
                <h2>Community Posts</h2>
                <PostContainer posts={posts} comments={comments} currentUser={user}/>
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