import React, { useState, useEffect } from 'react'
import PostContainer from './PostContainer'

function HomePage({user}) {
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        fetch('/posts')
            .then(resp => resp.json())
            .then(data => setPosts(null))
    })


    return (
        <div>
            <PostContainer/>
        </div>
    )
}

export default HomePage
