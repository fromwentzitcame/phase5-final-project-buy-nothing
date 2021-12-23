import React from 'react'

import styled from 'styled-components'

function Post({postData}) {
    return (
        <PostCard>
            <h3>{postData.category_type}</h3>
                <IconPic src={postData.user_picture}/>
                <p>{postData.user_name}</p>
            <p>{postData.text}</p>
        </PostCard>
    )
}

export default Post

const PostCard = styled.div`
    background-color: #baccba;
    border-radius: 8px; 
    padding: 2px;
    margin: 10px;
`

const IconPic = styled.img`
    height: 40px;
    width: 40px;
    object-fit: cover;
    border-radius: 50px;
    margin-right: 15px;
    position: relative;
`