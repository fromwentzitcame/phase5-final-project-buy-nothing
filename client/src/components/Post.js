import React from 'react'
import Comment from './Comment'

import styled from 'styled-components'

import { PostButton } from "../styles";

function Post({currentUser, postData, comments}) {

    let displayComments = comments.map(comment => <Comment key={comment.id} commentData={comment} currentUser={currentUser}/>)
    let displayPictures = postData.picture_urls.map(picture => <img key={picture} src={picture} alt="broken image"></img>)

    return (
        <PostCard>
            <h3>{postData.category_type}</h3>
            <UserInfo>
                <IconPic src={postData.user_picture}/>
                <p>{postData.user_name}</p>
            </UserInfo>
            <p>{postData.text}</p>
            { postData.picture_urls.length > 0 ? 
                        <PicDiv>
                        {displayPictures}
                    </PicDiv> : null
            }
            <div>
                <p>{postData.likes} likes</p>
                <PostButton>like</PostButton>
                <PostButton>comment</PostButton>
                {postData.user_id === currentUser.id ? <PostButton>delete</PostButton> : null }
                <p>comments</p>
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
    /* margin: 10px; */
    padding: 5px;
`